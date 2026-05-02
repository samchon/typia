import { OpenApi, OpenApiV3_1 } from "@typia/interface";

import { OpenApiTypeChecker } from "../../validators/OpenApiTypeChecker";

export namespace OpenApiV3_1Downgrader {
  export interface IComponentsCollection {
    original: OpenApi.IComponents;
    downgraded: OpenApiV3_1.IComponents;
  }

  export const downgrade = (
    input: OpenApi.IDocument,
  ): OpenApiV3_1.IDocument => {
    const collection: IComponentsCollection = downgradeComponents(
      input.components,
    );
    return {
      openapi: "3.1.0",
      servers: input.servers,
      info: input.info,
      components: collection.downgraded,
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
      webhooks: input.webhooks
        ? Object.fromEntries(
            Object.entries(input.webhooks)
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
    (pathItem: OpenApi.IPath): OpenApiV3_1.IPath => {
      // Collect non-standard operations for x-additionalOperations
      const xAdditionalOperations: Record<string, OpenApiV3_1.IOperation> = {};

      // query method goes to x-additionalOperations
      if (pathItem.query) {
        xAdditionalOperations["query"] = downgradeOperation(collection)(
          pathItem.query,
        );
      }

      // additionalOperations also go to x-additionalOperations
      if (pathItem.additionalOperations) {
        for (const [key, value] of Object.entries(
          pathItem.additionalOperations,
        )) {
          if (value !== undefined) {
            xAdditionalOperations[key] = downgradeOperation(collection)(value);
          }
        }
      }

      return {
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
        ...(Object.keys(xAdditionalOperations).length > 0
          ? { "x-additionalOperations": xAdditionalOperations }
          : undefined),
        // Remove v3.2-only properties from spread
        query: undefined,
        additionalOperations: undefined,
      };
    };

  const downgradeOperation =
    (collection: IComponentsCollection) =>
    (input: OpenApi.IOperation): OpenApiV3_1.IOperation => ({
      ...input,
      parameters: input.parameters
        ? input.parameters.map(downgradeParameter(collection))
        : undefined,
      requestBody: input.requestBody
        ? downgradeRequestBody(collection)(input.requestBody)
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
    });

  const downgradeParameter =
    (collection: IComponentsCollection) =>
    (
      input: OpenApi.IOperation.IParameter,
    ): OpenApiV3_1.IOperation.IParameter => ({
      ...input,
      in: input.in === "querystring" ? "query" : input.in,
      schema: downgradeSchema(collection)(input.schema),
    });

  const downgradeRequestBody =
    (collection: IComponentsCollection) =>
    (
      input: OpenApi.IOperation.IRequestBody,
    ): OpenApiV3_1.IOperation.IRequestBody => ({
      ...input,
      content: input.content
        ? downgradeContent(collection)(input.content)
        : undefined,
    });

  const downgradeResponse =
    (collection: IComponentsCollection) =>
    (
      input: OpenApi.IOperation.IResponse,
    ): OpenApiV3_1.IOperation.IResponse => ({
      ...input,
      content: input.content
        ? downgradeContent(collection)(input.content)
        : undefined,
      headers: input.headers
        ? Object.fromEntries(
            Object.entries(input.headers)
              .filter(([_, v]) => v !== undefined)
              .map(([key, value]) => [
                key,
                {
                  ...value,
                  schema: downgradeSchema(collection)(value.schema),
                },
              ]),
          )
        : undefined,
    });

  const downgradeContent =
    (collection: IComponentsCollection) =>
    (
      record: OpenApi.IOperation.IContent,
    ): Record<string, OpenApiV3_1.IOperation.IMediaType> =>
      Object.fromEntries(
        Object.entries(record)
          .filter(([_, v]) => v !== undefined)
          .map(
            ([key, value]) =>
              [
                key,
                {
                  ...value,
                  schema: value?.schema
                    ? downgradeSchema(collection)(value.schema)
                    : undefined,
                  // itemSchema is v3.2-only, remove it
                  itemSchema: undefined,
                },
              ] as const,
          ),
      );

  /* -----------------------------------------------------------
    DEFINITIONS
  ----------------------------------------------------------- */
  export const downgradeComponents = (
    input: OpenApi.IComponents,
  ): IComponentsCollection => {
    const collection: IComponentsCollection = {
      original: input,
      downgraded: {
        securitySchemes: input.securitySchemes
          ? downgradeSecuritySchemes(input.securitySchemes)
          : undefined,
      },
    };
    if (input.schemas) {
      collection.downgraded.schemas = {};
      for (const [key, value] of Object.entries(input.schemas))
        if (value !== undefined)
          collection.downgraded.schemas[key] =
            downgradeSchema(collection)(value);
    }
    return collection;
  };

  export const downgradeSchema =
    (collection: IComponentsCollection) =>
    (input: OpenApi.IJsonSchema): OpenApiV3_1.IJsonSchema => {
      const union: OpenApiV3_1.IJsonSchema[] = [];
      const attribute: OpenApiV3_1.IJsonSchema.__IAttribute = {
        title: input.title,
        description: input.description,
        deprecated: input.deprecated,
        readOnly: input.readOnly,
        writeOnly: input.writeOnly,
        example: input.example,
        examples: input.examples,
        ...Object.fromEntries(
          Object.entries(input).filter(
            ([key, value]) => key.startsWith("x-") && value !== undefined,
          ),
        ),
      };
      const visit = (schema: OpenApi.IJsonSchema): void => {
        if (OpenApiTypeChecker.isNull(schema)) union.push({ type: "null" });
        else if (OpenApiTypeChecker.isConstant(schema))
          union.push({ const: schema.const });
        else if (
          OpenApiTypeChecker.isBoolean(schema) ||
          OpenApiTypeChecker.isInteger(schema) ||
          OpenApiTypeChecker.isNumber(schema) ||
          OpenApiTypeChecker.isString(schema) ||
          OpenApiTypeChecker.isReference(schema)
        )
          union.push({ ...schema });
        else if (OpenApiTypeChecker.isArray(schema))
          union.push({
            ...schema,
            items: downgradeSchema(collection)(schema.items),
          });
        else if (OpenApiTypeChecker.isTuple(schema))
          union.push({
            ...schema,
            prefixItems: schema.prefixItems.map(downgradeSchema(collection)),
            additionalItems:
              typeof schema.additionalItems === "object"
                ? downgradeSchema(collection)(schema.additionalItems)
                : schema.additionalItems,
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
          });
        else if (OpenApiTypeChecker.isOneOf(schema))
          schema.oneOf.forEach(visit);
      };
      visit(input);
      return {
        ...(union.length === 0
          ? { type: undefined }
          : union.length === 1
            ? { ...union[0] }
            : { oneOf: union }),
        ...attribute,
      };
    };

  const downgradeSecuritySchemes = (
    input: Record<string, OpenApi.ISecurityScheme>,
  ): Record<string, OpenApiV3_1.ISecurityScheme> =>
    Object.fromEntries(
      Object.entries(input)
        .filter(([_, v]) => v !== undefined)
        .map(([key, value]) => [key, downgradeSecurityScheme(value)]),
    );

  const downgradeSecurityScheme = (
    input: OpenApi.ISecurityScheme,
  ): OpenApiV3_1.ISecurityScheme => {
    if (input.type === "oauth2") {
      const { deviceAuthorization: _, ...flows } = input.flows;
      return {
        type: "oauth2",
        flows,
        description: input.description,
      };
    }
    return { ...input } as OpenApiV3_1.ISecurityScheme;
  };
}
