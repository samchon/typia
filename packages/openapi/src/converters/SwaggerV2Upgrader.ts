import { OpenApi } from "../OpenApi";
import { SwaggerV2 } from "../SwaggerV2";
import { IJsonSchemaAttribute } from "../structures/IJsonSchemaAttribute";
import { OpenApiExclusiveEmender } from "../utils/OpenApiExclusiveEmender";
import { OpenApiTypeChecker } from "../utils/OpenApiTypeChecker";

export namespace SwaggerV2Upgrader {
  export const convert = (input: SwaggerV2.IDocument): OpenApi.IDocument => ({
    openapi: "3.1.0",
    info: input.info,
    components: convertComponents(input),
    paths: input.paths
      ? Object.fromEntries(
          Object.entries(input.paths)
            .filter(([_, v]) => v !== undefined)
            .map(
              ([key, value]) => [key, convertPathItem(input)(value)] as const,
            ),
        )
      : undefined,
    servers: input.host
      ? [
          {
            url: input.host,
          },
        ]
      : undefined,
    security: input.security,
    tags: input.tags,
    "x-samchon-emended-v4": true,
  });

  /* -----------------------------------------------------------
    OPERATORS
  ----------------------------------------------------------- */
  const convertPathItem =
    (doc: SwaggerV2.IDocument) =>
    (pathItem: SwaggerV2.IPath): OpenApi.IPath => ({
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
    (doc: SwaggerV2.IDocument) =>
    (pathItem: SwaggerV2.IPath) =>
    (input: SwaggerV2.IOperation): OpenApi.IOperation => ({
      ...input,
      parameters:
        pathItem.parameters !== undefined || input.parameters !== undefined
          ? (
              [...(pathItem.parameters ?? []), ...(input.parameters ?? [])]
                .map((p) =>
                  TypeChecker.isReference(p)
                    ? doc.parameters?.[p.$ref.split("/").pop() ?? ""]!
                    : p,
                )
                .filter(
                  (p) =>
                    p !== undefined &&
                    p.in !== "body" &&
                    (p as SwaggerV2.IOperation.IBodyParameter).schema ===
                      undefined,
                ) as SwaggerV2.IOperation.IGeneralParameter[]
            ).map(convertParameter(doc.definitions ?? {}))
          : undefined,
      requestBody: (() => {
        const found: SwaggerV2.IOperation.IBodyParameter | undefined =
          input.parameters?.find((p) => {
            if (TypeChecker.isReference(p))
              p = doc.parameters?.[p.$ref.split("/").pop() ?? ""]!;
            return (
              (p as SwaggerV2.IOperation.IBodyParameter)?.schema !== undefined
            );
          }) as SwaggerV2.IOperation.IBodyParameter | undefined;
        return found
          ? convertRequestBody(doc.definitions ?? {})(found)
          : undefined;
      })(),
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
    (definitions: Record<string, SwaggerV2.IJsonSchema>) =>
    (
      input: SwaggerV2.IOperation.IGeneralParameter,
    ): OpenApi.IOperation.IParameter => ({
      name: input.name,
      in: input.in as any,
      description: input.description,
      schema: convertSchema(definitions)(input),
      required: true,
    });
  const convertRequestBody =
    (definitions: Record<string, SwaggerV2.IJsonSchema>) =>
    (
      input: SwaggerV2.IOperation.IBodyParameter,
    ): OpenApi.IOperation.IRequestBody => ({
      description: input.description,
      content: {
        "application/json": {
          schema: convertSchema(definitions)(input.schema),
        },
      },
    });

  const convertResponse =
    (doc: SwaggerV2.IDocument) =>
    (
      input:
        | SwaggerV2.IOperation.IResponse
        | SwaggerV2.IJsonSchema.IReference<`#/definitions/responses/${string}`>,
    ): OpenApi.IOperation.IResponse | undefined => {
      if (TypeChecker.isReference(input)) {
        const found: SwaggerV2.IOperation.IResponse | undefined =
          doc.responses?.[input.$ref.split("/").pop() ?? ""]!;
        if (found === undefined) return undefined;
        input = found;
      }
      return {
        description: input.description,
        content: input.schema
          ? {
              "application/json": {
                schema: convertSchema(doc.definitions ?? {})(input.schema),
                example: input.example,
              },
            }
          : undefined,
        headers: input.headers
          ? Object.fromEntries(
              Object.entries(input.headers)
                .filter(([_, v]) => v !== undefined)
                .map(
                  ([key, value]) =>
                    [
                      key,
                      {
                        schema: convertSchema(doc.definitions ?? {})(value),
                        in: "header",
                      },
                    ] as const,
                ),
            )
          : undefined,
      };
    };

  /* -----------------------------------------------------------
    DEFINITIONS
  ----------------------------------------------------------- */
  const convertComponents = (
    input: SwaggerV2.IDocument,
  ): OpenApi.IComponents => ({
    schemas: Object.fromEntries(
      Object.entries(input.definitions ?? {})
        .filter(([_, v]) => v !== undefined)
        .map(([key, value]) => [
          key,
          convertSchema(input.definitions ?? {})(value),
        ]),
    ),
    securitySchemes: input.securityDefinitions
      ? Object.fromEntries(
          Object.entries(input.securityDefinitions)
            .filter(([_, v]) => v !== undefined)
            .map(([key, value]) => [key, convertSecurityScheme(value)])
            .filter(([_, v]) => v !== undefined),
        )
      : undefined,
  });

  const convertSecurityScheme = (
    input: SwaggerV2.ISecurityDefinition,
  ): OpenApi.ISecurityScheme => {
    if (input.type === "apiKey") return input;
    else if (input.type === "basic")
      return {
        type: "http",
        scheme: "basic",
        description: input.description,
      };
    else if (input.type === "oauth2")
      if (input.flow === "implicit")
        return {
          type: "oauth2",
          description: input.description,
          flows: {
            implicit: {
              authorizationUrl: input.authorizationUrl,
              scopes: input.scopes,
            },
          },
        };
      else if (input.flow === "accessCode")
        return {
          type: "oauth2",
          description: input.description,
          flows: {
            authorizationCode: {
              authorizationUrl: input.authorizationUrl,
              tokenUrl: input.tokenUrl,
              scopes: input.scopes,
            },
          },
        };
      else if (input.flow === "password")
        return {
          type: "oauth2",
          description: input.description,
          flows: {
            password: {
              tokenUrl: input.tokenUrl,
              scopes: input.scopes,
            },
          },
        };
      else if (input.flow === "application")
        return {
          type: "oauth2",
          description: input.description,
          flows: {
            clientCredentials: {
              tokenUrl: input.tokenUrl,
              scopes: input.scopes,
            },
          },
        };
      else return undefined!;
    return undefined!;
  };

  export const convertSchema =
    (definitions: Record<string, SwaggerV2.IJsonSchema>) =>
    (input: SwaggerV2.IJsonSchema): OpenApi.IJsonSchema => {
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
        example: input.example,
        examples: input.examples
          ? Object.fromEntries(input.examples.map((v, i) => [`v${i}`, v]))
          : undefined,
        ...Object.fromEntries(
          Object.entries(input).filter(
            ([key, value]) => key.startsWith("x-") && value !== undefined,
          ),
        ),
      };
      const visit = (schema: SwaggerV2.IJsonSchema): void => {
        // NULLABLE PROPERTY
        if (
          (schema as SwaggerV2.IJsonSchema.__ISignificant<any>)[
            "x-nullable"
          ] === true
        ) {
          nullable.value ||= true;
          if ((schema as SwaggerV2.IJsonSchema.INumber).default === null)
            nullable.default = null;
        }
        if (
          Array.isArray((schema as SwaggerV2.IJsonSchema.INumber).enum) &&
          (schema as SwaggerV2.IJsonSchema.INumber).enum?.length &&
          (schema as SwaggerV2.IJsonSchema.INumber).enum?.some(
            (e) => e === null,
          )
        )
          nullable.value ||= true;
        // UNION TYPE CASE
        if (TypeChecker.isAnyOf(schema)) schema["x-anyOf"].forEach(visit);
        else if (TypeChecker.isOneOf(schema)) schema["x-oneOf"].forEach(visit);
        else if (TypeChecker.isAllOf(schema))
          if (schema.allOf.length === 1) visit(schema.allOf[0]);
          else union.push(convertAllOfSchema(definitions)(schema));
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
                examples: schema.examples
                  ? Object.fromEntries(
                      schema.examples.map((v, i) => [`v${i}`, v]),
                    )
                  : undefined,
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
              examples: schema.examples
                ? Object.fromEntries(
                    schema.examples.map((v, i) => [`v${i}`, v]),
                  )
                : undefined,
              ...{ enum: undefined },
            });
        // INSTANCE TYPE CASE
        else if (TypeChecker.isArray(schema))
          union.push({
            ...schema,
            items: convertSchema(definitions)(schema.items),
            examples: schema.examples
              ? Object.fromEntries(schema.examples.map((v, i) => [`v${i}`, v]))
              : undefined,
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
                        convertSchema(definitions)(value),
                      ]),
                  )
                : {},
              additionalProperties: schema.additionalProperties
                ? typeof schema.additionalProperties === "object" &&
                  schema.additionalProperties !== null
                  ? convertSchema(definitions)(schema.additionalProperties)
                  : schema.additionalProperties
                : undefined,
            },
            examples: schema.examples
              ? Object.fromEntries(schema.examples.map((v, i) => [`v${i}`, v]))
              : undefined,
            required: schema.required ?? [],
          });
        else if (TypeChecker.isReference(schema))
          union.push({
            ...schema,
            $ref: schema.$ref.replace(
              "#/definitions/",
              "#/components/schemas/",
            ),
            examples: schema.examples
              ? Object.fromEntries(schema.examples.map((v, i) => [`v${i}`, v]))
              : undefined,
          });
        else
          union.push({
            ...schema,
            examples: schema.examples
              ? Object.fromEntries(schema.examples.map((v, i) => [`v${i}`, v]))
              : undefined,
          });
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
            : { oneOf: union.map((u) => ({ ...u, "x-nullable": undefined })) }),
        ...attribute,
        ...{ "x-nullable": undefined },
      };
    };

  const convertAllOfSchema =
    (definitions: Record<string, SwaggerV2.IJsonSchema>) =>
    (input: SwaggerV2.IJsonSchema.IAllOf): OpenApi.IJsonSchema => {
      const objects: Array<SwaggerV2.IJsonSchema.IObject | null> =
        input.allOf.map((schema) => retrieveObject(definitions)(schema));
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
                [key, convertSchema(definitions)(value)] as const,
            ),
        ),
        ...{
          allOf: undefined,
          required: [...new Set(objects.map((o) => o?.required ?? []).flat())],
        },
      };
    };

  const retrieveObject =
    (definitions: Record<string, SwaggerV2.IJsonSchema>) =>
    (
      input: SwaggerV2.IJsonSchema,
      visited: Set<SwaggerV2.IJsonSchema> = new Set(),
    ): SwaggerV2.IJsonSchema.IObject | null => {
      if (TypeChecker.isObject(input))
        return input.properties !== undefined && !input.additionalProperties
          ? input
          : null;
      else if (visited.has(input)) return null;
      else visited.add(input);

      if (TypeChecker.isReference(input))
        return retrieveObject(definitions)(
          definitions?.[input.$ref.split("/").pop() ?? ""] ?? {},
          visited,
        );
      return null;
    };

  namespace TypeChecker {
    export const isBoolean = (
      schema: SwaggerV2.IJsonSchema,
    ): schema is SwaggerV2.IJsonSchema.IBoolean =>
      (schema as SwaggerV2.IJsonSchema.IBoolean).type === "boolean";
    export const isInteger = (
      schema: SwaggerV2.IJsonSchema,
    ): schema is SwaggerV2.IJsonSchema.IInteger =>
      (schema as SwaggerV2.IJsonSchema.IInteger).type === "integer";
    export const isNumber = (
      schema: SwaggerV2.IJsonSchema,
    ): schema is SwaggerV2.IJsonSchema.INumber =>
      (schema as SwaggerV2.IJsonSchema.INumber).type === "number";
    export const isString = (
      schema: SwaggerV2.IJsonSchema,
    ): schema is SwaggerV2.IJsonSchema.IString =>
      (schema as SwaggerV2.IJsonSchema.IString).type === "string";
    export const isArray = (
      schema: SwaggerV2.IJsonSchema,
    ): schema is SwaggerV2.IJsonSchema.IArray =>
      (schema as SwaggerV2.IJsonSchema.IArray).type === "array";
    export const isObject = (
      schema: SwaggerV2.IJsonSchema,
    ): schema is SwaggerV2.IJsonSchema.IObject =>
      (schema as SwaggerV2.IJsonSchema.IObject).type === "object";
    export const isReference = (
      schema: SwaggerV2.IJsonSchema,
    ): schema is SwaggerV2.IJsonSchema.IReference =>
      (schema as SwaggerV2.IJsonSchema.IReference).$ref !== undefined;
    export const isAllOf = (
      schema: SwaggerV2.IJsonSchema,
    ): schema is SwaggerV2.IJsonSchema.IAllOf =>
      (schema as SwaggerV2.IJsonSchema.IAllOf).allOf !== undefined;
    export const isOneOf = (
      schema: SwaggerV2.IJsonSchema,
    ): schema is SwaggerV2.IJsonSchema.IOneOf =>
      (schema as SwaggerV2.IJsonSchema.IOneOf)["x-oneOf"] !== undefined;
    export const isAnyOf = (
      schema: SwaggerV2.IJsonSchema,
    ): schema is SwaggerV2.IJsonSchema.IAnyOf =>
      (schema as SwaggerV2.IJsonSchema.IAnyOf)["x-anyOf"] !== undefined;
    export const isNullOnly = (
      schema: SwaggerV2.IJsonSchema,
    ): schema is SwaggerV2.IJsonSchema.INullOnly =>
      (schema as SwaggerV2.IJsonSchema.INullOnly).type === "null";
  }
}
