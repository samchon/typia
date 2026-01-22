import { OpenApi } from "../OpenApi";
import { OpenApiV3_1 } from "../OpenApiV3_1";
import { IJsonSchemaAttribute } from "../structures/IJsonSchemaAttribute";
import { OpenApiExclusiveEmender } from "../utils/OpenApiExclusiveEmender";

export namespace OpenApiV3_1Emender {
  export const convert = (input: OpenApiV3_1.IDocument): OpenApi.IDocument => {
    if ((input as OpenApi.IDocument)["x-samchon-emended-v4"] === true)
      return input as OpenApi.IDocument;
    return {
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
      webhooks: input.webhooks
        ? Object.fromEntries(
            Object.entries(input.webhooks)
              .filter(([_, v]) => v !== undefined)
              .map(
                ([key, value]) =>
                  [key, convertWebhooks(input)(value)!] as const,
              )
              .filter(([_, value]) => value !== undefined),
          )
        : undefined,
      "x-samchon-emended-v4": true,
    };
  };

  /* -----------------------------------------------------------
    OPERATORS
  ----------------------------------------------------------- */
  const convertWebhooks =
    (doc: OpenApiV3_1.IDocument) =>
    (
      webhook:
        | OpenApiV3_1.IPath
        | OpenApiV3_1.IJsonSchema.IReference<`#/components/pathItems/${string}`>,
    ): OpenApi.IPath | undefined => {
      if (!TypeChecker.isReference(webhook))
        return convertPathItem(doc)(webhook);
      const found: OpenApiV3_1.IPath | undefined =
        doc.components?.pathItems?.[webhook.$ref.split("/").pop() ?? ""];
      return found ? convertPathItem(doc)(found) : undefined;
    };

  const convertPathItem =
    (doc: OpenApiV3_1.IDocument) =>
    (pathItem: OpenApiV3_1.IPath): OpenApi.IPath => ({
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
    (doc: OpenApiV3_1.IDocument) =>
    (pathItem: OpenApiV3_1.IPath) =>
    (input: OpenApiV3_1.IOperation): OpenApi.IOperation => ({
      ...input,
      parameters:
        pathItem.parameters !== undefined || input.parameters !== undefined
          ? [...(pathItem.parameters ?? []), ...(input.parameters ?? [])]
              .map((p) => {
                if (!TypeChecker.isReference(p))
                  return convertParameter(doc.components ?? {})(p);
                const found:
                  | Omit<OpenApiV3_1.IOperation.IParameter, "in">
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
              .filter(([_, value]) => value !== undefined),
          )
        : undefined,
    });

  const convertParameter =
    (components: OpenApiV3_1.IComponents) =>
    (
      input: OpenApiV3_1.IOperation.IParameter,
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
    (doc: OpenApiV3_1.IDocument) =>
    (
      input:
        | OpenApiV3_1.IOperation.IRequestBody
        | OpenApiV3_1.IJsonSchema.IReference<`#/components/requestBodies/${string}`>,
    ): OpenApi.IOperation.IRequestBody | undefined => {
      if (TypeChecker.isReference(input)) {
        const found: OpenApiV3_1.IOperation.IRequestBody | undefined =
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
    (doc: OpenApiV3_1.IDocument) =>
    (
      input:
        | OpenApiV3_1.IOperation.IResponse
        | OpenApiV3_1.IJsonSchema.IReference<`#/components/responses/${string}`>,
    ): OpenApi.IOperation.IResponse | undefined => {
      if (TypeChecker.isReference(input)) {
        const found: OpenApiV3_1.IOperation.IResponse | undefined =
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
                          | Omit<OpenApiV3_1.IOperation.IParameter, "in">
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
    (components: OpenApiV3_1.IComponents) =>
    (
      record: Record<string, OpenApiV3_1.IOperation.IMediaType>,
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
    input: OpenApiV3_1.IComponents,
  ): OpenApi.IComponents => ({
    schemas: Object.fromEntries(
      Object.entries(input.schemas ?? {})
        .filter(([_, v]) => v !== undefined)
        .map(([key, value]) => [key, convertSchema(input)(value)] as const),
    ),
    securitySchemes: input.securitySchemes,
  });

  export const convertSchema =
    (components: OpenApiV3_1.IComponents) =>
    (input: OpenApiV3_1.IJsonSchema): OpenApi.IJsonSchema => {
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
      const nullable: { value: boolean; default?: null } = {
        value: false,
        default: undefined,
      };

      const visit = (schema: OpenApiV3_1.IJsonSchema): void => {
        // NULLABLE PROPERTY
        if ((schema as OpenApiV3_1.IJsonSchema.INumber).nullable === true) {
          nullable.value ||= true;
          if ((schema as OpenApiV3_1.IJsonSchema.INumber).default === null)
            nullable.default = null;
        }
        if (
          Array.isArray((schema as OpenApiV3_1.IJsonSchema.INumber).enum) &&
          (schema as OpenApiV3_1.IJsonSchema.INumber).enum?.length &&
          (schema as OpenApiV3_1.IJsonSchema.INumber).enum?.some(
            (e) => e === null,
          )
        )
          nullable.value ||= true;

        // MIXED TYPE CASE
        if (TypeChecker.isMixed(schema)) {
          if (schema.const !== undefined)
            visit({
              ...schema,
              ...{
                type: undefined,
                oneOf: undefined,
                anyOf: undefined,
                allOf: undefined,
                $ref: undefined,
              },
            });
          if (schema.oneOf !== undefined)
            visit({
              ...schema,
              ...{
                type: undefined,
                anyOf: undefined,
                allOf: undefined,
                $ref: undefined,
              },
            });
          if (schema.anyOf !== undefined)
            visit({
              ...schema,
              ...{
                type: undefined,
                oneOf: undefined,
                allOf: undefined,
                $ref: undefined,
              },
            });
          if (schema.allOf !== undefined)
            visit({
              ...schema,
              ...{
                type: undefined,
                oneOf: undefined,
                anyOf: undefined,
                $ref: undefined,
              },
            });
          for (const type of schema.type)
            if (type === "boolean" || type === "number" || type === "string")
              visit({
                ...schema,
                ...{
                  enum:
                    schema.enum?.length && schema.enum.filter((e) => e !== null)
                      ? schema.enum.filter((x) => typeof x === type)
                      : undefined,
                },
                type: type as any,
              });
            else if (type === "integer")
              visit({
                ...schema,
                ...{
                  enum:
                    schema.enum?.length && schema.enum.filter((e) => e !== null)
                      ? schema.enum.filter(
                          (x) =>
                            x !== null &&
                            typeof x === "number" &&
                            Number.isInteger(x),
                        )
                      : undefined,
                },
                type: type as any,
              });
            else visit({ ...schema, type: type as any });
        }
        // UNION TYPE CASE
        else if (TypeChecker.isOneOf(schema)) schema.oneOf.forEach(visit);
        else if (TypeChecker.isAnyOf(schema)) schema.anyOf.forEach(visit);
        else if (TypeChecker.isAllOf(schema))
          if (schema.allOf.length === 1) visit(schema.allOf[0]);
          else union.push(convertAllOfSchema(components)(schema));
        // ATOMIC TYPE CASE (CONSIDER ENUM VALUES)
        else if (TypeChecker.isBoolean(schema))
          if (
            schema.enum?.length &&
            schema.enum.filter((e) => e !== null).length
          )
            for (const value of schema.enum.filter((e) => e !== null))
              union.push({
                const: value,
                ...({
                  ...schema,
                  type: undefined as any,
                  enum: undefined,
                  default: undefined,
                } satisfies OpenApiV3_1.IJsonSchema.IBoolean as any),
              } satisfies OpenApi.IJsonSchema.IConstant);
          else
            union.push({
              ...schema,
              default: schema.default ?? undefined,
              ...{
                enum: undefined,
              },
            });
        else if (TypeChecker.isInteger(schema) || TypeChecker.isNumber(schema))
          if (schema.enum?.length && schema.enum.filter((e) => e !== null))
            for (const value of schema.enum.filter((e) => e !== null))
              union.push({
                const: value,
                ...({
                  ...schema,
                  type: undefined as any,
                  enum: undefined,
                  default: undefined,
                  minimum: undefined,
                  maximum: undefined,
                  exclusiveMinimum: undefined,
                  exclusiveMaximum: undefined,
                  multipleOf: undefined,
                } satisfies OpenApiV3_1.IJsonSchema.IInteger as any),
              } satisfies OpenApi.IJsonSchema.IConstant);
          else
            union.push(
              OpenApiExclusiveEmender.emend({
                ...schema,
                default: schema.default ?? undefined,
                ...{
                  enum: undefined,
                },
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
              }),
            );
        else if (TypeChecker.isString(schema))
          if (
            schema.enum?.length &&
            schema.enum.filter((e) => e !== null).length
          )
            for (const value of schema.enum.filter((e) => e !== null))
              union.push({
                const: value,
                ...({
                  ...schema,
                  type: undefined as any,
                  enum: undefined,
                  default: undefined,
                } satisfies OpenApiV3_1.IJsonSchema.IString as any),
              } satisfies OpenApi.IJsonSchema.IConstant);
          else
            union.push({
              ...schema,
              default: schema.default ?? undefined,
              ...{
                enum: undefined,
              },
            });
        // ARRAY TYPE CASE (CONSIDER TUPLE)
        else if (TypeChecker.isArray(schema)) {
          if (Array.isArray(schema.items))
            union.push({
              ...schema,
              ...{
                items: undefined!,
                prefixItems: schema.items.map(convertSchema(components)),
                additionalItems:
                  typeof schema.additionalItems === "object" &&
                  schema.additionalItems !== null
                    ? convertSchema(components)(schema.additionalItems)
                    : schema.additionalItems,
              },
            } satisfies OpenApi.IJsonSchema.ITuple);
          else if (Array.isArray(schema.prefixItems))
            union.push({
              ...schema,
              ...{
                items: undefined!,
                prefixItems: schema.prefixItems.map(convertSchema(components)),
                additionalItems:
                  typeof schema.additionalItems === "object" &&
                  schema.additionalItems !== null
                    ? convertSchema(components)(schema.additionalItems)
                    : schema.additionalItems,
              },
            });
          else if (schema.items === undefined)
            union.push({
              ...schema,
              ...{
                items: undefined!,
                prefixItems: [],
              },
            });
          else
            union.push({
              ...schema,
              ...{
                items: convertSchema(components)(schema.items),
                prefixItems: undefined,
                additionalItems: undefined,
              },
            });
        }
        // OBJECT TYPE CASE
        else if (TypeChecker.isObject(schema))
          union.push({
            ...schema,
            ...{
              properties: schema.properties
                ? Object.fromEntries(
                    Object.entries(schema.properties)
                      .filter(([_, v]) => v !== undefined)
                      .map(
                        ([key, value]) =>
                          [key, convertSchema(components)(value)] as const,
                      ),
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
        else if (TypeChecker.isReference(schema))
          union.push({
            ...schema,
            ...{
              $ref: `#/components/schemas/${schema.$ref.split("/").pop()}`,
            },
          });
        else if (TypeChecker.isRecursiveReference(schema))
          union.push({
            ...schema,
            ...{
              $ref: `#/components/schemas/${schema.$recursiveRef.split("/").pop()}`,
              $recursiveRef: undefined,
            },
          });
        // THE OTHERS
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
      return {
        ...(union.length === 0
          ? {
              type: undefined,
            }
          : union.length === 1
            ? {
                ...union[0],
              }
            : {
                oneOf: union.map((u) => ({
                  ...u,
                  nullable: undefined,
                  $defs: undefined,
                })),
              }),
        ...attribute,
        ...{
          nullable: undefined,
          $defs: undefined,
        },
      };
    };

  const convertAllOfSchema =
    (components: OpenApiV3_1.IComponents) =>
    (input: OpenApiV3_1.IJsonSchema.IAllOf): OpenApi.IJsonSchema => {
      const objects: Array<OpenApiV3_1.IJsonSchema.IObject | null> =
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
    (components: OpenApiV3_1.IComponents) =>
    (
      input: OpenApiV3_1.IJsonSchema,
      visited: Set<OpenApiV3_1.IJsonSchema> = new Set(),
    ): OpenApiV3_1.IJsonSchema.IObject | null => {
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
      else if (TypeChecker.isRecursiveReference(input))
        return retrieveObject(components)(
          components.schemas?.[input.$recursiveRef.split("/").pop() ?? ""] ??
            {},
          visited,
        );
      return null;
    };

  namespace TypeChecker {
    export const isConstant = (
      schema: OpenApiV3_1.IJsonSchema,
    ): schema is OpenApiV3_1.IJsonSchema.IConstant =>
      (schema as OpenApiV3_1.IJsonSchema.IConstant).const !== undefined;
    export const isBoolean = (
      schema: OpenApiV3_1.IJsonSchema,
    ): schema is OpenApiV3_1.IJsonSchema.IBoolean =>
      (schema as OpenApiV3_1.IJsonSchema.IBoolean).type === "boolean";
    export const isInteger = (
      schema: OpenApiV3_1.IJsonSchema,
    ): schema is OpenApiV3_1.IJsonSchema.IInteger =>
      (schema as OpenApiV3_1.IJsonSchema.IInteger).type === "integer";
    export const isNumber = (
      schema: OpenApiV3_1.IJsonSchema,
    ): schema is OpenApiV3_1.IJsonSchema.INumber =>
      (schema as OpenApiV3_1.IJsonSchema.INumber).type === "number";
    export const isString = (
      schema: OpenApiV3_1.IJsonSchema,
    ): schema is OpenApiV3_1.IJsonSchema.IString =>
      (schema as OpenApiV3_1.IJsonSchema.IString).type === "string";
    export const isArray = (
      schema: OpenApiV3_1.IJsonSchema,
    ): schema is OpenApiV3_1.IJsonSchema.IArray =>
      (schema as OpenApiV3_1.IJsonSchema.IArray).type === "array";
    export const isObject = (
      schema: OpenApiV3_1.IJsonSchema,
    ): schema is OpenApiV3_1.IJsonSchema.IObject =>
      (schema as OpenApiV3_1.IJsonSchema.IObject).type === "object";
    export const isReference = (
      schema: OpenApiV3_1.IJsonSchema,
    ): schema is OpenApiV3_1.IJsonSchema.IReference =>
      (schema as OpenApiV3_1.IJsonSchema.IReference).$ref !== undefined;
    export const isRecursiveReference = (
      schema: OpenApiV3_1.IJsonSchema,
    ): schema is OpenApiV3_1.IJsonSchema.IRecursiveReference =>
      (schema as OpenApiV3_1.IJsonSchema.IRecursiveReference).$recursiveRef !==
      undefined;
    export const isAllOf = (
      schema: OpenApiV3_1.IJsonSchema,
    ): schema is OpenApiV3_1.IJsonSchema.IAllOf =>
      (schema as OpenApiV3_1.IJsonSchema.IAllOf).allOf !== undefined;
    export const isAnyOf = (
      schema: OpenApiV3_1.IJsonSchema,
    ): schema is OpenApiV3_1.IJsonSchema.IAnyOf =>
      (schema as OpenApiV3_1.IJsonSchema.IAnyOf).anyOf !== undefined;
    export const isOneOf = (
      schema: OpenApiV3_1.IJsonSchema,
    ): schema is OpenApiV3_1.IJsonSchema.IOneOf =>
      (schema as OpenApiV3_1.IJsonSchema.IOneOf).oneOf !== undefined;
    export const isNullOnly = (
      schema: OpenApiV3_1.IJsonSchema,
    ): schema is OpenApiV3_1.IJsonSchema.INull =>
      (schema as OpenApiV3_1.IJsonSchema.INull).type === "null";
    export const isMixed = (
      schema: OpenApiV3_1.IJsonSchema,
    ): schema is OpenApiV3_1.IJsonSchema.IMixed =>
      Array.isArray((schema as OpenApiV3_1.IJsonSchema.IMixed).type);
  }
}
