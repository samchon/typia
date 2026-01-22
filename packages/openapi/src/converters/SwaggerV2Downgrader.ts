import { OpenApi } from "../OpenApi";
import { SwaggerV2 } from "../SwaggerV2";
import { OpenApiTypeChecker } from "../utils/OpenApiTypeChecker";

export namespace SwaggerV2Downgrader {
  export interface IComponentsCollection {
    original: OpenApi.IComponents;
    downgraded: Record<string, SwaggerV2.IJsonSchema>;
  }

  export const downgrade = (input: OpenApi.IDocument): SwaggerV2.IDocument => {
    const collection: IComponentsCollection = downgradeComponents(
      input.components,
    );
    return {
      swagger: "2.0",
      info: input.info,
      host: input.servers?.[0]?.url
        ? input.servers[0].url.split("://").pop()!
        : "",
      definitions: collection.downgraded,
      securityDefinitions: input.components?.securitySchemes
        ? Object.fromEntries(
            Object.entries(input.components.securitySchemes)
              .filter(([_, v]) => v !== undefined)
              .map(([key, value]) =>
                downgradeSecurityScheme(value).map((v) => [key, v]),
              )
              .flat(),
          )
        : undefined,
      paths: input.paths
        ? Object.fromEntries(
            Object.entries(input.paths)
              .filter(([_, v]) => v !== undefined)
              .map(
                ([key, value]) =>
                  [key, downgradePathItem(collection)(value)] as const,
              ),
          )
        : undefined,
      security: input.security,
      tags: input.tags,
    };
  };

  /* -----------------------------------------------------------
    OPERATORS
  ----------------------------------------------------------- */
  const downgradePathItem =
    (collection: IComponentsCollection) =>
    (pathItem: OpenApi.IPath): SwaggerV2.IPath => ({
      ...(pathItem as any),
      ...(pathItem.get
        ? { get: downgradeOperation(collection)(pathItem.get) }
        : undefined),
      ...(pathItem.put
        ? { put: downgradeOperation(collection)(pathItem.put) }
        : undefined),
      ...(pathItem.post
        ? { post: downgradeOperation(collection)(pathItem.post) }
        : undefined),
      ...(pathItem.delete
        ? { delete: downgradeOperation(collection)(pathItem.delete) }
        : undefined),
      ...(pathItem.options
        ? { options: downgradeOperation(collection)(pathItem.options) }
        : undefined),
      ...(pathItem.head
        ? { head: downgradeOperation(collection)(pathItem.head) }
        : undefined),
      ...(pathItem.patch
        ? { patch: downgradeOperation(collection)(pathItem.patch) }
        : undefined),
      ...(pathItem.trace
        ? { trace: downgradeOperation(collection)(pathItem.trace) }
        : undefined),
    });

  const downgradeOperation =
    (collection: IComponentsCollection) =>
    (input: OpenApi.IOperation): SwaggerV2.IOperation => ({
      ...input,
      parameters:
        input.parameters !== undefined || input.requestBody !== undefined
          ? [
              ...(input.parameters ?? []).map(downgradeParameter(collection)),
              ...(input.requestBody
                ? [downgradeRequestBody(collection)(input.requestBody)]
                : []),
            ]
          : undefined,
      responses: input.responses
        ? Object.fromEntries(
            Object.entries(input.responses)
              .filter(([_, v]) => v !== undefined)
              .map(([key, value]) => [
                key,
                downgradeResponse(collection)(value),
              ]),
          )
        : undefined,
      ...{
        requestBody: undefined,
        servers: undefined,
      },
    });

  const downgradeParameter =
    (collection: IComponentsCollection) =>
    (
      input: OpenApi.IOperation.IParameter,
      i: number,
    ): SwaggerV2.IOperation.IParameter =>
      ({
        ...downgradeSchema(collection)(input.schema),
        ...input,
        required: (input.schema as any)?.required,
        schema: undefined,
        name: input.name ?? `p${i}`,
        ...{
          example: undefined,
          examples: undefined,
        },
      }) as any;

  const downgradeRequestBody =
    (collection: IComponentsCollection) =>
    (
      input: OpenApi.IOperation.IRequestBody,
    ): SwaggerV2.IOperation.IParameter => ({
      name: "body",
      in: "body",
      description: input.description,
      required: input.required,
      schema: downgradeSchema(collection)(
        Object.values(input.content ?? {})[0]?.schema ?? {},
      ),
    });

  const downgradeResponse =
    (collection: IComponentsCollection) =>
    (input: OpenApi.IOperation.IResponse): SwaggerV2.IOperation.IResponse => ({
      description: input.description,
      schema: downgradeSchema(collection)(
        Object.values(input.content ?? {})[0]?.schema ?? {},
      ),
      headers: input.headers
        ? Object.fromEntries(
            Object.entries(input.headers)
              .filter(([_, v]) => v !== undefined)
              .map(([key, value]) => [
                key,
                {
                  ...value,
                  schema: downgradeSchema(collection)(value.schema),
                  ...{
                    example: undefined,
                    examples: undefined,
                  },
                },
              ]),
          )
        : undefined,
    });

  /* -----------------------------------------------------------
    DEFINITIONS
  ----------------------------------------------------------- */
  export const downgradeComponents = (
    input: OpenApi.IComponents,
  ): IComponentsCollection => {
    const collection: IComponentsCollection = {
      original: input,
      downgraded: {},
    };
    if (input.schemas) {
      collection.downgraded.schemas = {};
      for (const [key, value] of Object.entries(input.schemas))
        if (value !== undefined)
          collection.downgraded[key.split("/").pop()!] =
            downgradeSchema(collection)(value);
    }
    return collection;
  };

  export const downgradeSchema =
    (collection: IComponentsCollection) =>
    (input: OpenApi.IJsonSchema): SwaggerV2.IJsonSchema => {
      const nullable: boolean = isNullable(new Set())(collection.original)(
        input,
      );
      const union: SwaggerV2.IJsonSchema[] = [];
      const attribute: SwaggerV2.IJsonSchema.__IAttribute = {
        title: input.title,
        description: input.description,
        deprecated: input.deprecated,
        readOnly: input.readOnly,
        example: input.example,
        examples: input.examples ? Object.values(input.examples) : undefined,
        ...Object.fromEntries(
          Object.entries(input).filter(
            ([key, value]) => key.startsWith("x-") && value !== undefined,
          ),
        ),
      };
      const visit = (schema: OpenApi.IJsonSchema): void => {
        if (OpenApiTypeChecker.isBoolean(schema))
          union.push({ type: "boolean" });
        else if (
          OpenApiTypeChecker.isBoolean(schema) ||
          OpenApiTypeChecker.isInteger(schema) ||
          OpenApiTypeChecker.isNumber(schema) ||
          OpenApiTypeChecker.isString(schema)
        )
          union.push({
            ...schema,
            examples: schema.examples
              ? Object.values(schema.examples)
              : undefined,
          });
        else if (OpenApiTypeChecker.isReference(schema))
          union.push({ $ref: `#/definitions/${schema.$ref.split("/").pop()}` });
        else if (OpenApiTypeChecker.isArray(schema))
          union.push({
            ...schema,
            items: downgradeSchema(collection)(schema.items),
            examples: schema.examples
              ? Object.values(schema.examples)
              : undefined,
          });
        else if (OpenApiTypeChecker.isTuple(schema))
          union.push({
            ...schema,
            items: ((): SwaggerV2.IJsonSchema => {
              if (schema.additionalItems === true) return {};
              const elements = [
                ...schema.prefixItems,
                ...(typeof schema.additionalItems === "object"
                  ? [downgradeSchema(collection)(schema.additionalItems)]
                  : []),
              ];
              if (elements.length === 0) return {};
              return {
                "x-oneOf": elements.map(downgradeSchema(collection) as any),
              };
            })(),
            minItems: schema.prefixItems.length,
            maxItems:
              !!schema.additionalItems === true
                ? undefined
                : schema.prefixItems.length,
            ...{
              prefixItems: undefined,
              additionalItems: undefined,
            },
            examples: schema.examples
              ? Object.values(schema.examples)
              : undefined,
          });
        else if (OpenApiTypeChecker.isObject(schema))
          union.push({
            ...schema,
            properties: schema.properties
              ? Object.fromEntries(
                  Object.entries(schema.properties)
                    .filter(([_, v]) => v !== undefined)
                    .map(([key, value]) => [
                      key,
                      downgradeSchema(collection)(value),
                    ]),
                )
              : undefined,
            additionalProperties:
              typeof schema.additionalProperties === "object"
                ? downgradeSchema(collection)(schema.additionalProperties)
                : schema.additionalProperties,
            required: schema.required,
            examples: schema.examples
              ? Object.values(schema.examples)
              : undefined,
          });
        else if (OpenApiTypeChecker.isOneOf(schema))
          schema.oneOf.forEach(visit);
      };
      const visitConstant = (schema: OpenApi.IJsonSchema): void => {
        const insert = (value: any): void => {
          const matched: SwaggerV2.IJsonSchema.INumber | undefined = union.find(
            (u) =>
              (u as SwaggerV2.IJsonSchema.__ISignificant<any>).type === value,
          ) as SwaggerV2.IJsonSchema.INumber | undefined;
          if (matched !== undefined) {
            matched.enum ??= [];
            matched.enum.push(value);
          } else union.push({ type: typeof value as "number", enum: [value] });
          if (OpenApiTypeChecker.isConstant(schema)) insert(schema.const);
          else if (OpenApiTypeChecker.isOneOf(schema))
            schema.oneOf.forEach(insert);
        };
      };

      visit(input);
      visitConstant(input);
      if (nullable) {
        for (const u of union)
          if (OpenApiTypeChecker.isReference(u as any))
            downgradeNullableReference(new Set())(collection)(u as any);
          else (u as SwaggerV2.IJsonSchema.IArray)["x-nullable"] = true;
      }

      if (nullable === true && union.length === 0)
        return { type: "null", ...attribute };
      return {
        ...(union.length === 0
          ? { type: undefined }
          : union.length === 1
            ? { ...union[0] }
            : { "x-oneOf": union }),
        ...attribute,
        ...(union.length > 1 ? { discriminator: undefined } : {}),
      };
    };

  const downgradeNullableReference =
    (visited: Set<string>) =>
    (collection: IComponentsCollection) =>
    (schema: SwaggerV2.IJsonSchema.IReference): void => {
      const key: string = schema.$ref.split("/").pop()!;
      if (key.endsWith(".Nullable")) return;

      const found: OpenApi.IJsonSchema | undefined =
        collection.original.schemas?.[key];
      if (found === undefined) return;
      else if (isNullable(visited)(collection.original)(found) === true) return;
      else if (collection.downgraded[`${key}.Nullable`] === undefined) {
        collection.downgraded[`${key}.Nullable`] = {};
        collection.downgraded[`${key}.Nullable`] = downgradeSchema(collection)(
          OpenApiTypeChecker.isOneOf(found)
            ? {
                ...found,
                oneOf: [...found.oneOf, { type: "null" }],
              }
            : {
                title: found.title,
                description: found.description,
                example: found.example,
                examples: found.examples
                  ? Object.values(found.examples)
                  : undefined,
                ...Object.fromEntries(
                  Object.entries(found).filter(
                    ([key, value]) =>
                      key.startsWith("x-") && value !== undefined,
                  ),
                ),
                oneOf: [found, { type: "null" }],
              },
        );
      }
      schema.$ref += ".Nullable";
    };

  const downgradeSecurityScheme = (
    input: OpenApi.ISecurityScheme,
  ): SwaggerV2.ISecurityDefinition[] => {
    if (input.type === "apiKey") return [input];
    else if (input.type === "http")
      if (input.scheme === "basic")
        return [{ type: "basic", description: input.description }];
      else return [];
    else if (input.type === "oauth2") {
      const output: SwaggerV2.ISecurityDefinition[] = [];
      if (input.flows.implicit)
        output.push({
          type: "oauth2",
          flow: "implicit",
          authorizationUrl: input.flows.implicit.authorizationUrl,
          scopes: input.flows.implicit.scopes,
        });
      if (input.flows.password)
        output.push({
          type: "oauth2",
          flow: "password",
          tokenUrl: input.flows.password.tokenUrl,
          scopes: input.flows.password.scopes,
        });
      if (input.flows.clientCredentials)
        output.push({
          type: "oauth2",
          flow: "application",
          tokenUrl: input.flows.clientCredentials.tokenUrl,
          scopes: input.flows.clientCredentials.scopes,
        });
      if (input.flows.authorizationCode)
        output.push({
          type: "oauth2",
          flow: "accessCode",
          authorizationUrl: input.flows.authorizationCode.authorizationUrl,
          tokenUrl: input.flows.authorizationCode.tokenUrl,
          scopes: input.flows.authorizationCode.scopes,
        });
      return output;
    }
    return [];
  };

  const isNullable =
    (visited: Set<string>) =>
    (components: OpenApi.IComponents) =>
    (schema: OpenApi.IJsonSchema): boolean => {
      if (OpenApiTypeChecker.isNull(schema)) return true;
      else if (OpenApiTypeChecker.isReference(schema)) {
        if (visited.has(schema.$ref)) return false;
        visited.add(schema.$ref);
        const key: string = schema.$ref.split("/").pop()!;
        const next: OpenApi.IJsonSchema | undefined = components.schemas?.[key];
        return next ? isNullable(visited)(components)(next) : false;
      }
      return (
        OpenApiTypeChecker.isOneOf(schema) &&
        schema.oneOf.some(isNullable(visited)(components))
      );
    };
}
