import { OpenApi } from "../OpenApi";
import { OpenApiV3 } from "../OpenApiV3";
import { IJsonSchemaAttribute } from "../structures/IJsonSchemaAttribute";
import { OpenApiExclusiveEmender } from "../utils/OpenApiExclusiveEmender";
import { OpenApiTypeChecker } from "../utils/OpenApiTypeChecker";

export namespace OpenApiV3Upgrader {
  export const convert = (input: OpenApiV3.IDocument): OpenApi.IDocument => ({
    ...input,
    components: convertComponents(input.components ?? {}),
    paths: input.paths
      ? Object.fromEntries(
          Object.entries(input.paths)
            .filter(([_, v]) => v !== undefined)
            .map(
              ([key, value]) => [key, convertPathItem(input)(value)] as const,
            ),
        )
      : undefined,
    openapi: "3.1.0",
    "x-samchon-emended-v4": true,
  });

  /* -----------------------------------------------------------
    OPERATORS
  ----------------------------------------------------------- */
  const convertPathItem =
    (doc: OpenApiV3.IDocument) =>
    (pathItem: OpenApiV3.IPath): OpenApi.IPath => ({
      ...(pathItem as any),
      ...(pathItem.get
        ? { get: convertOperation(doc)(pathItem)(pathItem.get) }
        : undefined),
      ...(pathItem.put
        ? { put: convertOperation(doc)(pathItem)(pathItem.put) }
        : undefined),
      ...(pathItem.post
        ? { post: convertOperation(doc)(pathItem)(pathItem.post) }
        : undefined),
      ...(pathItem.delete
        ? { delete: convertOperation(doc)(pathItem)(pathItem.delete) }
        : undefined),
      ...(pathItem.options
        ? { options: convertOperation(doc)(pathItem)(pathItem.options) }
        : undefined),
      ...(pathItem.head
        ? { head: convertOperation(doc)(pathItem)(pathItem.head) }
        : undefined),
      ...(pathItem.patch
        ? { patch: convertOperation(doc)(pathItem)(pathItem.patch) }
        : undefined),
      ...(pathItem.trace
        ? { trace: convertOperation(doc)(pathItem)(pathItem.trace) }
        : undefined),
    });

  const convertOperation =
    (doc: OpenApiV3.IDocument) =>
    (pathItem: OpenApiV3.IPath) =>
    (input: OpenApiV3.IOperation): OpenApi.IOperation => ({
      ...input,
      parameters:
        pathItem.parameters !== undefined || input.parameters !== undefined
          ? [...(pathItem.parameters ?? []), ...(input.parameters ?? [])]
              .map((p) => {
                if (!TypeChecker.isReference(p))
                  return convertParameter(doc.components ?? {})(p);
                const found:
                  | Omit<OpenApiV3.IOperation.IParameter, "in">
                  | undefined = p.$ref.startsWith("#/components/headers/")
                  ? doc.components?.headers?.[p.$ref.split("/").pop() ?? ""]
                  : doc.components?.parameters?.[p.$ref.split("/").pop() ?? ""];
                return found !== undefined
                  ? convertParameter(doc.components ?? {})({
                      ...found,
                      in: "header",
                    })
                  : undefined!;
              })
              .filter((_, v) => v !== undefined)
          : undefined,
      requestBody: input.requestBody
        ? convertRequestBody(doc)(input.requestBody)
        : undefined,
      responses: input.responses
        ? Object.fromEntries(
            Object.entries(input.responses)
              .filter(([_, v]) => v !== undefined)
              .map(
                ([key, value]) => [key, convertResponse(doc)(value)!] as const,
              )
              .filter(([_, v]) => v !== undefined),
          )
        : undefined,
    });

  const convertParameter =
    (components: OpenApiV3.IComponents) =>
    (
      input: OpenApiV3.IOperation.IParameter,
    ): OpenApi.IOperation.IParameter => ({
      ...input,
      schema: convertSchema(components)(input.schema),
      examples: input.examples
        ? Object.fromEntries(
            Object.entries(input.examples)
              .map(([key, value]) => [
                key,
                TypeChecker.isReference(value)
                  ? components.examples?.[value.$ref.split("/").pop() ?? ""]
                  : value,
              ])
              .filter(([_, v]) => v !== undefined),
          )
        : undefined,
    });

  const convertRequestBody =
    (doc: OpenApiV3.IDocument) =>
    (
      input:
        | OpenApiV3.IOperation.IRequestBody
        | OpenApiV3.IJsonSchema.IReference<`#/components/requestBodies/${string}`>,
    ): OpenApi.IOperation.IRequestBody | undefined => {
      if (TypeChecker.isReference(input)) {
        const found: OpenApiV3.IOperation.IRequestBody | undefined =
          doc.components?.requestBodies?.[input.$ref.split("/").pop() ?? ""];
        if (found === undefined) return undefined;
        input = found;
      }
      return {
        ...input,
        content: input.content
          ? convertContent(doc.components ?? {})(input.content)
          : undefined,
      };
    };

  const convertResponse =
    (doc: OpenApiV3.IDocument) =>
    (
      input:
        | OpenApiV3.IOperation.IResponse
        | OpenApiV3.IJsonSchema.IReference<`#/components/responses/${string}`>,
    ): OpenApi.IOperation.IResponse | undefined => {
      if (TypeChecker.isReference(input)) {
        const found: OpenApiV3.IOperation.IResponse | undefined =
          doc.components?.responses?.[input.$ref.split("/").pop() ?? ""];
        if (found === undefined) return undefined;
        input = found;
      }
      return {
        ...input,
        content: input.content
          ? convertContent(doc.components ?? {})(input.content)
          : undefined,
        headers: input.headers
          ? Object.fromEntries(
              Object.entries(input.headers)
                .filter(([_, v]) => v !== undefined)
                .map(
                  ([key, value]) =>
                    [
                      key,
                      (() => {
                        if (TypeChecker.isReference(value) === false)
                          return convertParameter(doc.components ?? {})({
                            ...value,
                            in: "header",
                          });
                        const found:
                          | Omit<OpenApiV3.IOperation.IParameter, "in">
                          | undefined = value.$ref.startsWith(
                          "#/components/headers/",
                        )
                          ? doc.components?.headers?.[
                              value.$ref.split("/").pop() ?? ""
                            ]
                          : undefined;
                        return found !== undefined
                          ? convertParameter(doc.components ?? {})({
                              ...found,
                              in: "header",
                            })
                          : undefined!;
                      })(),
                    ] as const,
                )
                .filter(([_, v]) => v !== undefined),
            )
          : undefined,
      };
    };

  const convertContent =
    (components: OpenApiV3.IComponents) =>
    (
      record: Record<string, OpenApiV3.IOperation.IMediaType>,
    ): Record<string, OpenApi.IOperation.IMediaType> =>
      Object.fromEntries(
        Object.entries(record)
          .filter(([_, v]) => v !== undefined)
          .map(
            ([key, value]) =>
              [
                key,
                {
                  ...value,
                  schema: value.schema
                    ? convertSchema(components)(value.schema)
                    : undefined,
                  examples: value.examples
                    ? Object.fromEntries(
                        Object.entries(value.examples)
                          .map(([key, value]) => [
                            key,
                            TypeChecker.isReference(value)
                              ? components.examples?.[
                                  value.$ref.split("/").pop() ?? ""
                                ]
                              : value,
                          ])
                          .filter(([_, v]) => v !== undefined),
                      )
                    : undefined,
                },
              ] as const,
          ),
      );

  /* -----------------------------------------------------------
    DEFINITIONS
  ----------------------------------------------------------- */
  export const convertComponents = (
    input: OpenApiV3.IComponents,
  ): OpenApi.IComponents => ({
    schemas: Object.fromEntries(
      Object.entries(input.schemas ?? {})
        .filter(([_, v]) => v !== undefined)
        .map(([key, value]) => [key, convertSchema(input)(value)]),
    ),
    securitySchemes: input.securitySchemes,
  });

  export const convertSchema =
    (components: OpenApiV3.IComponents) =>
    (input: OpenApiV3.IJsonSchema): OpenApi.IJsonSchema => {
      const nullable: { value: boolean; default?: null } = {
        value: false,
        default: undefined,
      };
      const union: OpenApi.IJsonSchema[] = [];
      const attribute: IJsonSchemaAttribute = {
        title: input.title,
        description: input.description,
        deprecated: input.deprecated,
        readOnly: input.readOnly,
        writeOnly: input.writeOnly,
        example: input.example,
        examples: Array.isArray(input.examples)
          ? Object.fromEntries(input.examples.map((v, i) => [`v${i}`, v]))
          : input.examples,
        ...Object.fromEntries(
          Object.entries(input).filter(
            ([key, value]) => key.startsWith("x-") && value !== undefined,
          ),
        ),
      };
      const visit = (schema: OpenApiV3.IJsonSchema): void => {
        // NULLABLE PROPERTY
        if ((schema as OpenApiV3.IJsonSchema.IBoolean).nullable === true) {
          nullable.value ||= true;
          if ((schema as OpenApiV3.IJsonSchema.IBoolean).default === null)
            nullable.default = null;
        }
        if (
          Array.isArray((schema as OpenApiV3.IJsonSchema.INumber).enum) &&
          (schema as OpenApiV3.IJsonSchema.INumber).enum?.length &&
          (schema as OpenApiV3.IJsonSchema.INumber).enum?.some(
            (e) => e === null,
          )
        )
          nullable.value ||= true;
        // UNION TYPE CASE
        if (TypeChecker.isAnyOf(schema)) schema.anyOf.forEach(visit);
        else if (TypeChecker.isOneOf(schema)) schema.oneOf.forEach(visit);
        else if (TypeChecker.isAllOf(schema))
          if (schema.allOf.length === 1) visit(schema.allOf[0]);
          else union.push(convertAllOfSchema(components)(schema));
        // ATOMIC TYPE CASE (CONSIDER ENUM VALUES)
        else if (
          TypeChecker.isBoolean(schema) ||
          TypeChecker.isInteger(schema) ||
          TypeChecker.isNumber(schema) ||
          TypeChecker.isString(schema)
        )
          if (
            schema.enum?.length &&
            schema.enum.filter((e) => e !== null).length
          )
            union.push(
              ...schema.enum
                .filter((v) => v !== null)
                .map((value) => ({ const: value })),
            );
          else if (
            TypeChecker.isInteger(schema) ||
            TypeChecker.isNumber(schema)
          )
            union.push(
              OpenApiExclusiveEmender.emend({
                ...schema,
                default: (schema.default ?? undefined) satisfies
                  | boolean
                  | number
                  | string
                  | undefined as any,
                exclusiveMinimum:
                  typeof schema.exclusiveMinimum === "boolean"
                    ? schema.exclusiveMinimum === true
                      ? schema.minimum
                      : undefined
                    : schema.exclusiveMinimum,
                exclusiveMaximum:
                  typeof schema.exclusiveMaximum === "boolean"
                    ? schema.exclusiveMaximum === true
                      ? schema.maximum
                      : undefined
                    : schema.exclusiveMaximum,
                minimum:
                  schema.exclusiveMinimum === true ? undefined : schema.minimum,
                maximum:
                  schema.exclusiveMaximum === true ? undefined : schema.maximum,
                ...{ enum: undefined },
              }),
            );
          else
            union.push({
              ...schema,
              default: (schema.default ?? undefined) satisfies
                | boolean
                | number
                | string
                | undefined as any,
              ...{ enum: undefined },
            });
        // INSTANCE TYPE CASE
        else if (TypeChecker.isArray(schema))
          union.push({
            ...schema,
            items: convertSchema(components)(schema.items),
          });
        else if (TypeChecker.isObject(schema))
          union.push({
            ...schema,
            ...{
              properties: schema.properties
                ? Object.fromEntries(
                    Object.entries(schema.properties)
                      .filter(([_, v]) => v !== undefined)
                      .map(([key, value]) => [
                        key,
                        convertSchema(components)(value),
                      ]),
                  )
                : {},
              additionalProperties: schema.additionalProperties
                ? typeof schema.additionalProperties === "object" &&
                  schema.additionalProperties !== null
                  ? convertSchema(components)(schema.additionalProperties)
                  : schema.additionalProperties
                : undefined,
              required: schema.required ?? [],
            },
          });
        else if (TypeChecker.isReference(schema)) union.push(schema);
        else union.push(schema);
      };

      visit(input);
      if (
        nullable.value === true &&
        !union.some((e) => (e as OpenApi.IJsonSchema.INull).type === "null")
      )
        union.push({
          type: "null",
          default: nullable.default,
        });
      if (
        union.length === 2 &&
        union.filter((x) => OpenApiTypeChecker.isNull(x)).length === 1
      ) {
        const type: OpenApi.IJsonSchema = union.filter(
          (x) => OpenApiTypeChecker.isNull(x) === false,
        )[0];
        for (const key of [
          "title",
          "description",
          "deprecated",
          "example",
          "examples",
        ] as const)
          if (type[key] !== undefined) delete type[key];
      }
      return {
        ...(union.length === 0
          ? { type: undefined }
          : union.length === 1
            ? { ...union[0] }
            : { oneOf: union.map((u) => ({ ...u, nullable: undefined })) }),
        ...attribute,
        ...{ nullable: undefined },
      };
    };

  const convertAllOfSchema =
    (components: OpenApiV3.IComponents) =>
    (input: OpenApiV3.IJsonSchema.IAllOf): OpenApi.IJsonSchema => {
      const objects: Array<OpenApiV3.IJsonSchema.IObject | null> =
        input.allOf.map((schema) => retrieveObject(components)(schema));
      if (objects.some((obj) => obj === null))
        return {
          type: undefined,
          ...{
            allOf: undefined,
          },
        };
      return {
        ...input,
        type: "object",
        properties: Object.fromEntries(
          objects
            .map((o) => Object.entries(o?.properties ?? {}))
            .flat()
            .map(
              ([key, value]) =>
                [key, convertSchema(components)(value)] as const,
            ),
        ),
        ...{
          allOf: undefined,
          required: [...new Set(objects.map((o) => o?.required ?? []).flat())],
        },
      };
    };

  const retrieveObject =
    (components: OpenApiV3.IComponents) =>
    (
      input: OpenApiV3.IJsonSchema,
      visited: Set<OpenApiV3.IJsonSchema> = new Set(),
    ): OpenApiV3.IJsonSchema.IObject | null => {
      if (TypeChecker.isObject(input))
        return input.properties !== undefined && !input.additionalProperties
          ? input
          : null;
      else if (visited.has(input)) return null;
      else visited.add(input);

      if (TypeChecker.isReference(input))
        return retrieveObject(components)(
          components.schemas?.[input.$ref.split("/").pop() ?? ""] ?? {},
          visited,
        );
      return null;
    };

  export namespace TypeChecker {
    export const isBoolean = (
      schema: OpenApiV3.IJsonSchema,
    ): schema is OpenApiV3.IJsonSchema.IBoolean =>
      (schema as OpenApiV3.IJsonSchema.IBoolean).type === "boolean";
    export const isInteger = (
      schema: OpenApiV3.IJsonSchema,
    ): schema is OpenApiV3.IJsonSchema.IInteger =>
      (schema as OpenApiV3.IJsonSchema.IInteger).type === "integer";
    export const isNumber = (
      schema: OpenApiV3.IJsonSchema,
    ): schema is OpenApiV3.IJsonSchema.INumber =>
      (schema as OpenApiV3.IJsonSchema.INumber).type === "number";
    export const isString = (
      schema: OpenApiV3.IJsonSchema,
    ): schema is OpenApiV3.IJsonSchema.IString =>
      (schema as OpenApiV3.IJsonSchema.IString).type === "string";
    export const isArray = (
      schema: OpenApiV3.IJsonSchema,
    ): schema is OpenApiV3.IJsonSchema.IArray =>
      (schema as OpenApiV3.IJsonSchema.IArray).type === "array";
    export const isObject = (
      schema: OpenApiV3.IJsonSchema,
    ): schema is OpenApiV3.IJsonSchema.IObject =>
      (schema as OpenApiV3.IJsonSchema.IObject).type === "object";
    export const isReference = (
      schema: OpenApiV3.IJsonSchema,
    ): schema is OpenApiV3.IJsonSchema.IReference =>
      (schema as OpenApiV3.IJsonSchema.IReference).$ref !== undefined;
    export const isAllOf = (
      schema: OpenApiV3.IJsonSchema,
    ): schema is OpenApiV3.IJsonSchema.IAllOf =>
      (schema as OpenApiV3.IJsonSchema.IAllOf).allOf !== undefined;
    export const isAnyOf = (
      schema: OpenApiV3.IJsonSchema,
    ): schema is OpenApiV3.IJsonSchema.IAnyOf =>
      (schema as OpenApiV3.IJsonSchema.IAnyOf).anyOf !== undefined;
    export const isOneOf = (
      schema: OpenApiV3.IJsonSchema,
    ): schema is OpenApiV3.IJsonSchema.IOneOf =>
      (schema as OpenApiV3.IJsonSchema.IOneOf).oneOf !== undefined;
    export const isNullOnly = (
      schema: OpenApiV3.IJsonSchema,
    ): schema is OpenApiV3.IJsonSchema.INullOnly =>
      (schema as OpenApiV3.IJsonSchema.INullOnly).type === "null";
  }
}
