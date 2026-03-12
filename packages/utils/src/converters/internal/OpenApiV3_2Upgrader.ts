import { OpenApi, OpenApiV3_2 } from "@typia/interface";

import { OpenApiV3_1TypeChecker } from "../../validators/OpenApiV3_1TypeChecker";
import { OpenApiV3_1Upgrader } from "./OpenApiV3_1Upgrader";

/**
 * OpenAPI v3.2 to emended OpenApi converter.
 *
 * Reuses JSON Schema conversion logic from OpenApiV3_1Upgrader since
 * the schema format is identical between v3.1 and v3.2.
 */
export namespace OpenApiV3_2Upgrader {
  export const convert = (input: OpenApiV3_2.IDocument): OpenApi.IDocument => {
    if ((input as OpenApi.IDocument)["x-typia-emended-v12"] === true)
      return input as OpenApi.IDocument;
    return {
      ...input,
      openapi: "3.2.0",
      components: convertComponents(input.components ?? {}),
      tags: input.tags?.map(convertTag),
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
      "x-typia-emended-v12": true,
    };
  };

  /* -----------------------------------------------------------
    TAGS
  ----------------------------------------------------------- */
  const convertTag = (tag: OpenApiV3_2.IDocument.ITag): OpenApi.IDocument.ITag => ({
    name: tag.name,
    summary: tag.summary,
    description: tag.description,
    parent: tag.parent,
    kind: tag.kind,
  });

  /* -----------------------------------------------------------
    OPERATORS
  ----------------------------------------------------------- */
  const convertWebhooks =
    (doc: OpenApiV3_2.IDocument) =>
    (
      webhook:
        | OpenApiV3_2.IPath
        | OpenApiV3_2.IJsonSchema.IReference<`#/components/pathItems/${string}`>,
    ): OpenApi.IPath | undefined => {
      if (!OpenApiV3_1TypeChecker.isReference(webhook))
        return convertPathItem(doc)(webhook);
      const found: OpenApiV3_2.IPath | undefined =
        doc.components?.pathItems?.[webhook.$ref.split("/").pop() ?? ""];
      return found ? convertPathItem(doc)(found) : undefined;
    };

  const convertPathItem =
    (doc: OpenApiV3_2.IDocument) =>
    (pathItem: OpenApiV3_2.IPath): OpenApi.IPath => ({
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
      ...(pathItem.query
        ? { query: convertOperation(doc)(pathItem)(pathItem.query) }
        : undefined),
      ...(pathItem.additionalOperations
        ? {
            additionalOperations: Object.fromEntries(
              Object.entries(pathItem.additionalOperations)
                .filter(([_, v]) => v !== undefined)
                .map(
                  ([key, value]) =>
                    [key, convertOperation(doc)(pathItem)(value)] as const,
                ),
            ),
          }
        : undefined),
    });

  const convertOperation =
    (doc: OpenApiV3_2.IDocument) =>
    (pathItem: OpenApiV3_2.IPath) =>
    (input: OpenApiV3_2.IOperation): OpenApi.IOperation => ({
      ...input,
      parameters:
        pathItem.parameters !== undefined || input.parameters !== undefined
          ? [...(pathItem.parameters ?? []), ...(input.parameters ?? [])]
              .map((p) => {
                if (!OpenApiV3_1TypeChecker.isReference(p))
                  return convertParameter(doc.components ?? {})(p);
                const found:
                  | Omit<OpenApiV3_2.IOperation.IParameter, "in">
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
    (components: OpenApiV3_2.IComponents) =>
    (
      input: OpenApiV3_2.IOperation.IParameter,
    ): OpenApi.IOperation.IParameter => ({
      ...input,
      schema: convertSchema(components)(input.schema),
      examples: input.examples
        ? Object.fromEntries(
            Object.entries(input.examples)
              .map(([key, value]) => [
                key,
                OpenApiV3_1TypeChecker.isReference(value)
                  ? components.examples?.[value.$ref.split("/").pop() ?? ""]
                  : value,
              ])
              .filter(([_, v]) => v !== undefined),
          )
        : undefined,
    });

  const convertRequestBody =
    (doc: OpenApiV3_2.IDocument) =>
    (
      input:
        | OpenApiV3_2.IOperation.IRequestBody
        | OpenApiV3_2.IJsonSchema.IReference<`#/components/requestBodies/${string}`>,
    ): OpenApi.IOperation.IRequestBody | undefined => {
      if (OpenApiV3_1TypeChecker.isReference(input)) {
        const found: OpenApiV3_2.IOperation.IRequestBody | undefined =
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
    (doc: OpenApiV3_2.IDocument) =>
    (
      input:
        | OpenApiV3_2.IOperation.IResponse
        | OpenApiV3_2.IJsonSchema.IReference<`#/components/responses/${string}`>,
    ): OpenApi.IOperation.IResponse | undefined => {
      if (OpenApiV3_1TypeChecker.isReference(input)) {
        const found: OpenApiV3_2.IOperation.IResponse | undefined =
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
                        if (OpenApiV3_1TypeChecker.isReference(value) === false)
                          return convertParameter(doc.components ?? {})({
                            ...value,
                            in: "header",
                          });
                        const found:
                          | Omit<OpenApiV3_2.IOperation.IParameter, "in">
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
    (components: OpenApiV3_2.IComponents) =>
    (
      record: Record<string, OpenApiV3_2.IOperation.IMediaType>,
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
                  itemSchema: value.itemSchema
                    ? convertSchema(components)(value.itemSchema)
                    : undefined,
                  examples: value.examples
                    ? Object.fromEntries(
                        Object.entries(value.examples)
                          .map(([key, value]) => [
                            key,
                            OpenApiV3_1TypeChecker.isReference(value)
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
    input: OpenApiV3_2.IComponents,
  ): OpenApi.IComponents => ({
    schemas: Object.fromEntries(
      Object.entries(input.schemas ?? {})
        .filter(([_, v]) => v !== undefined)
        .map(([key, value]) => [key, convertSchema(input)(value)] as const),
    ),
    securitySchemes: input.securitySchemes
      ? Object.fromEntries(
          Object.entries(input.securitySchemes)
            .filter(([_, v]) => v !== undefined)
            .map(
              ([key, value]) =>
                [key, convertSecurityScheme(value)] as const,
            ),
        )
      : undefined,
  });

  const convertSecurityScheme = (
    input: OpenApiV3_2.ISecurityScheme,
  ): OpenApi.ISecurityScheme => {
    if (input.type === "oauth2") {
      return {
        ...input,
        flows: {
          ...input.flows,
          deviceAuthorization: input.flows.deviceAuthorization,
        },
        oauth2MetadataUrl: input.oauth2MetadataUrl,
      };
    }
    return input;
  };

  /**
   * Reuse schema conversion from OpenApiV3_1Upgrader.
   * OpenAPI v3.2 uses the same JSON Schema (2020-12) as v3.1.
   */
  export const convertSchema =
    (components: OpenApiV3_2.IComponents) =>
    (input: OpenApiV3_2.IJsonSchema): OpenApi.IJsonSchema =>
      OpenApiV3_1Upgrader.convertSchema(components as any)(input as any);
}
