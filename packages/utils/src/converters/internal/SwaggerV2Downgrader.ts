import { OpenApi, SwaggerV2 } from "@typia/interface";

import { OpenApiTypeChecker } from "../../validators/OpenApiTypeChecker";

export namespace SwaggerV2Downgrader {
  export interface IComponentsCollection {
    original: OpenApi.IComponents;
    downgraded: Record<string, SwaggerV2.IJsonSchema>;
  }

  export const downgrade = (input: OpenApi.IDocument): SwaggerV2.IDocument => {
    const collection: IComponentsCollection = downgradeComponents(
      input.components,
    );
    const server: ISwaggerServer = downgradeServers(
      input.servers,
      "document servers",
    );
    return {
      swagger: "2.0",
      info: input.info,
      host: server.host,
      basePath: server.basePath,
      schemes: server.schemes,
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
                  [key, downgradePathItem(collection, server)(value)] as const,
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
    (collection: IComponentsCollection, documentServer: ISwaggerServer) =>
    (pathItem: OpenApi.IPath): SwaggerV2.IPath => {
      // Collect non-standard operations for x-additionalOperations
      const xAdditionalOperations: Record<string, SwaggerV2.IOperation> = {};

      // query method goes to x-additionalOperations
      if (pathItem.query) {
        xAdditionalOperations["query"] = downgradeOperation(
          collection,
          documentServer,
          pathItem.servers,
        )(pathItem.query);
      }

      // additionalOperations also go to x-additionalOperations
      if (pathItem.additionalOperations) {
        for (const [key, value] of Object.entries(
          pathItem.additionalOperations,
        )) {
          if (value !== undefined) {
            xAdditionalOperations[key] = downgradeOperation(
              collection,
              documentServer,
              pathItem.servers,
            )(value);
          }
        }
      }

      return {
        ...(pathItem as any),
        ...(pathItem.get
          ? {
              get: downgradeOperation(
                collection,
                documentServer,
                pathItem.servers,
              )(pathItem.get),
            }
          : undefined),
        ...(pathItem.put
          ? {
              put: downgradeOperation(
                collection,
                documentServer,
                pathItem.servers,
              )(pathItem.put),
            }
          : undefined),
        ...(pathItem.post
          ? {
              post: downgradeOperation(
                collection,
                documentServer,
                pathItem.servers,
              )(pathItem.post),
            }
          : undefined),
        ...(pathItem.delete
          ? {
              delete: downgradeOperation(
                collection,
                documentServer,
                pathItem.servers,
              )(pathItem.delete),
            }
          : undefined),
        ...(pathItem.options
          ? {
              options: downgradeOperation(
                collection,
                documentServer,
                pathItem.servers,
              )(pathItem.options),
            }
          : undefined),
        ...(pathItem.head
          ? {
              head: downgradeOperation(
                collection,
                documentServer,
                pathItem.servers,
              )(pathItem.head),
            }
          : undefined),
        ...(pathItem.patch
          ? {
              patch: downgradeOperation(
                collection,
                documentServer,
                pathItem.servers,
              )(pathItem.patch),
            }
          : undefined),
        ...(pathItem.trace
          ? {
              trace: downgradeOperation(
                collection,
                documentServer,
                pathItem.servers,
              )(pathItem.trace),
            }
          : undefined),
        ...(Object.keys(xAdditionalOperations).length > 0
          ? { "x-additionalOperations": xAdditionalOperations }
          : undefined),
        // Remove v3.2-only properties from spread
        query: undefined,
        additionalOperations: undefined,
        servers: undefined,
      };
    };

  const downgradeOperation =
    (
      collection: IComponentsCollection,
      documentServer: ISwaggerServer,
      pathServers: OpenApi.IServer[] | undefined,
    ) =>
    (input: OpenApi.IOperation): SwaggerV2.IOperation => {
      const body: IDowngradedRequestBody | undefined = input.requestBody
        ? downgradeRequestBody(collection)(input.requestBody)
        : undefined;
      const responseEntries: Array<[string, IDowngradedResponse]> =
        Object.entries(input.responses ?? {})
          .filter(([_, value]) => value !== undefined)
          .map(([key, value]) => [key, downgradeResponse(collection)(value)]);
      const produced: string[][] = responseEntries
        .map(([_, value]) => value.produces)
        .filter((value): value is string[] => value !== undefined);
      if (produced.some((value) => !sameStrings(value, produced[0]!)))
        throw new TypeError(
          "SwaggerV2Downgrader: response media types must be identical within an operation.",
        );

      return {
        ...input,
        parameters:
          input.parameters !== undefined || body !== undefined
            ? [
                ...(input.parameters ?? []).map(downgradeParameter(collection)),
                ...(body ? [body.parameter] : []),
              ]
            : undefined,
        responses: input.responses
          ? Object.fromEntries(
              responseEntries.map(([key, value]) => [key, value.response]),
            )
          : undefined,
        schemes: downgradeOperationSchemes(
          documentServer,
          input.servers ?? pathServers,
        ),
        consumes: body?.consumes,
        produces: produced[0],
        ...{
          requestBody: undefined,
          servers: undefined,
        },
      };
    };

  const downgradeParameter =
    (collection: IComponentsCollection) =>
    (
      input: OpenApi.IOperation.IParameter,
      i: number,
    ): SwaggerV2.IOperation.IParameter => {
      const {
        schema,
        required,
        content: _content,
        style: _style,
        explode: _explode,
        example: _example,
        examples: _examples,
        ...rest
      } = input;
      const { required: _schemaRequired, ...downgraded } = downgradeSchema(
        collection,
      )(schema) as SwaggerV2.IJsonSchema & {
        required?: unknown;
      };
      return {
        ...downgraded,
        ...rest,
        in: input.in === "querystring" ? "query" : input.in,
        ...(required !== undefined ? { required } : {}),
        name: input.name ?? `p${i}`,
      } as SwaggerV2.IOperation.IParameter;
    };

  const downgradeRequestBody =
    (collection: IComponentsCollection) =>
    (input: OpenApi.IOperation.IRequestBody): IDowngradedRequestBody => {
      const media: IDowngradedMedia = downgradeMedia(
        input.content,
        "request body",
      );
      if (media.example !== undefined)
        throw new TypeError(
          "SwaggerV2Downgrader: request body examples are not representable.",
        );
      return {
        consumes: media.types,
        parameter: {
          name: "body",
          in: "body",
          description: input.description,
          ...(input.required !== undefined ? { required: input.required } : {}),
          schema: downgradeSchema(collection)(media.schema ?? {}),
        },
      };
    };

  const downgradeResponse =
    (collection: IComponentsCollection) =>
    (input: OpenApi.IOperation.IResponse): IDowngradedResponse => {
      const media: IDowngradedMedia = downgradeMedia(input.content, "response");
      return {
        produces: media.types,
        response: {
          description: input.description,
          schema:
            input.content !== undefined
              ? downgradeSchema(collection)(media.schema ?? {})
              : undefined,
          example: media.example,
          headers: input.headers
            ? Object.fromEntries(
                Object.entries(input.headers)
                  .filter(([_, v]) => v !== undefined)
                  .map(([key, value]) => {
                    const {
                      name: _name,
                      in: _in,
                      required: _required,
                      style: _style,
                      explode: _explode,
                      example: _example,
                      examples: _examples,
                      schema,
                      ...rest
                    } = value;
                    return [
                      key,
                      {
                        ...rest,
                        ...downgradeSchema(collection)(schema),
                      },
                    ];
                  }),
              )
            : undefined,
        },
      };
    };

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
      const constantGroups: Map<
        "boolean" | "number" | "string",
        | SwaggerV2.IJsonSchema.IBoolean
        | SwaggerV2.IJsonSchema.INumber
        | SwaggerV2.IJsonSchema.IString
      > = new Map();
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
      const insertConstant = (value: boolean | number | string): void => {
        const type: "boolean" | "number" | "string" =
          typeof value === "boolean"
            ? "boolean"
            : typeof value === "number"
              ? "number"
              : "string";
        const old = constantGroups.get(type);
        if (old !== undefined) {
          old.enum ??= [];
          if (old.enum.includes(value as never) === false)
            old.enum.push(value as never);
          return;
        }
        const created = {
          type,
          enum: [value],
        } as
          | SwaggerV2.IJsonSchema.IBoolean
          | SwaggerV2.IJsonSchema.INumber
          | SwaggerV2.IJsonSchema.IString;
        constantGroups.set(type, created);
        union.push(created);
      };
      const visit = (schema: OpenApi.IJsonSchema): void => {
        if (OpenApiTypeChecker.isConstant(schema)) insertConstant(schema.const);
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
            properties:
              schema.properties === undefined
                ? undefined
                : Object.fromEntries(
                    Object.entries(schema.properties)
                      .filter(([_, v]) => v !== undefined)
                      .map(([key, value]) => [
                        key,
                        downgradeSchema(collection)(value),
                      ]),
                  ),
            additionalProperties:
              schema.additionalProperties === undefined
                ? undefined
                : typeof schema.additionalProperties === "object"
                  ? downgradeSchema(collection)(schema.additionalProperties)
                  : schema.additionalProperties,
            required: schema.required,
            examples:
              schema.examples === undefined
                ? undefined
                : Object.values(schema.examples),
          });
        else if (OpenApiTypeChecker.isOneOf(schema))
          schema.oneOf.forEach(visit);
      };

      visit(input);
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

  interface ISwaggerServer {
    host?: string;
    basePath?: string;
    schemes?: string[];
  }

  interface IDowngradedRequestBody {
    consumes?: string[];
    parameter: SwaggerV2.IOperation.IBodyParameter;
  }

  interface IDowngradedResponse {
    produces?: string[];
    response: SwaggerV2.IOperation.IResponse;
  }

  interface IDowngradedMedia {
    types?: string[];
    schema?: OpenApi.IJsonSchema;
    example?: any;
  }

  const downgradeServers = (
    servers: OpenApi.IServer[] | undefined,
    scope: string,
  ): ISwaggerServer => {
    if (!servers?.length) return {};
    const parsed: ISwaggerServer[] = servers.map((server) => {
      if (
        Object.keys(server.variables ?? {}).length > 0 ||
        server.url.includes("{")
      )
        throw new TypeError(
          `SwaggerV2Downgrader: ${scope} contain template variables.`,
        );
      if (/[?#]/.test(server.url))
        throw new TypeError(
          `SwaggerV2Downgrader: ${scope} contain a query or fragment.`,
        );
      const absolute: RegExpMatchArray | null = server.url.match(
        /^([A-Za-z][A-Za-z0-9+.-]*):\/\/([^/?#]+)(\/[^?#]*)?$/,
      );
      if (absolute)
        return {
          schemes: [absolute[1]!],
          host: absolute[2]!,
          basePath: normalizeBasePath(absolute[3]),
        };
      const network: RegExpMatchArray | null = server.url.match(
        /^\/\/([^/?#]+)(\/[^?#]*)?$/,
      );
      if (network)
        return {
          host: network[1]!,
          basePath: normalizeBasePath(network[2]),
        };
      if (server.url.startsWith("/"))
        return { basePath: normalizeBasePath(server.url) };
      throw new TypeError(
        `SwaggerV2Downgrader: ${scope} contain a relative URL Swagger 2 cannot represent.`,
      );
    });
    const first: ISwaggerServer = parsed[0]!;
    if (
      parsed.some(
        (server) =>
          server.host !== first.host || server.basePath !== first.basePath,
      )
    )
      throw new TypeError(
        `SwaggerV2Downgrader: ${scope} must share one host and basePath.`,
      );
    const withoutScheme: boolean = parsed.some(
      (server) => server.schemes === undefined,
    );
    const withScheme: boolean = parsed.some(
      (server) => server.schemes !== undefined,
    );
    if (withoutScheme && withScheme)
      throw new TypeError(
        `SwaggerV2Downgrader: ${scope} mix explicit and scheme-relative URLs.`,
      );
    return {
      host: first.host,
      basePath: first.basePath,
      schemes: withScheme
        ? [...new Set(parsed.flatMap((server) => server.schemes ?? []))]
        : undefined,
    };
  };

  const downgradeOperationSchemes = (
    document: ISwaggerServer,
    servers: OpenApi.IServer[] | undefined,
  ): string[] | undefined => {
    if (servers === undefined) return undefined;
    const operation: ISwaggerServer = downgradeServers(
      servers,
      "operation servers",
    );
    if (
      operation.host !== document.host ||
      operation.basePath !== document.basePath
    )
      throw new TypeError(
        "SwaggerV2Downgrader: operation servers cannot override host or basePath.",
      );
    if (sameStrings(operation.schemes, document.schemes)) return undefined;
    if (operation.schemes === undefined)
      throw new TypeError(
        "SwaggerV2Downgrader: an operation cannot remove document schemes.",
      );
    return operation.schemes;
  };

  const downgradeMedia = (
    content: OpenApi.IOperation.IContent | undefined,
    scope: string,
  ): IDowngradedMedia => {
    const entries: [string, OpenApi.IOperation.IMediaType][] = Object.entries(
      content ?? {},
    ).filter(
      (entry): entry is [string, OpenApi.IOperation.IMediaType] =>
        entry[1] !== undefined,
    );
    if (entries.length === 0) return {};
    const first = entries[0]![1];
    if (first.itemSchema !== undefined)
      throw new TypeError(
        `SwaggerV2Downgrader: ${scope} itemSchema is not representable.`,
      );
    if (Object.keys(first.examples ?? {}).length > 0)
      throw new TypeError(
        `SwaggerV2Downgrader: ${scope} named examples are not representable.`,
      );
    for (const [_, media] of entries.slice(1)) {
      if (media.itemSchema !== undefined)
        throw new TypeError(
          `SwaggerV2Downgrader: ${scope} itemSchema is not representable.`,
        );
      if (Object.keys(media.examples ?? {}).length > 0)
        throw new TypeError(
          `SwaggerV2Downgrader: ${scope} named examples are not representable.`,
        );
      if (!sameJson(media.schema, first.schema))
        throw new TypeError(
          `SwaggerV2Downgrader: ${scope} media types must share one schema.`,
        );
      if (!sameJson(media.example, first.example))
        throw new TypeError(
          `SwaggerV2Downgrader: ${scope} media types must share one example.`,
        );
    }
    return {
      types: [...new Set(entries.map(([type]) => type))],
      schema: first.schema,
      example: first.example,
    };
  };

  const normalizeBasePath = (path: string | undefined): string | undefined => {
    if (!path) return undefined;
    if (path === "/") return path;
    const prefixed: string = path.startsWith("/") ? path : `/${path}`;
    return prefixed.replace(/\/+$/, "");
  };

  const sameStrings = (
    x: string[] | undefined,
    y: string[] | undefined,
  ): boolean =>
    x === undefined || y === undefined
      ? x === y
      : x.length === y.length && x.every((value, index) => value === y[index]);

  const sameJson = (x: unknown, y: unknown): boolean =>
    JSON.stringify(canonicalize(x)) === JSON.stringify(canonicalize(y));

  const canonicalize = (value: unknown): unknown => {
    if (Array.isArray(value)) return value.map(canonicalize);
    if (value === null || typeof value !== "object") return value;
    return Object.fromEntries(
      Object.entries(value)
        .sort(([x], [y]) => x.localeCompare(y))
        .map(([key, entry]) => [key, canonicalize(entry)]),
    );
  };
}
