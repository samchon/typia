import { IHttpMigrateRoute, OpenApi } from "@typia/interface";

import { NamingConvention } from "../../utils/NamingConvention";
import { EndpointUtil } from "../../utils/internal/EndpointUtil";
import { ObjectDictionary } from "../../utils/internal/ObjectDictionary";
import { OpenApiSchemaSanitizer } from "../../utils/internal/OpenApiSchemaSanitizer";
import { OpenApiTypeChecker } from "../../validators/OpenApiTypeChecker";

export namespace HttpMigrateRouteComposer {
  export interface IProps {
    document: OpenApi.IDocument;
    method: "head" | "get" | "post" | "put" | "patch" | "delete" | "query";
    path: string;
    emendedPath: string;
    operation: OpenApi.IOperation;
  }
  export const compose = (props: IProps): IHttpMigrateRoute | string[] => {
    sanitizeOperationSchemas(props.document)(props.operation);

    //----
    // REQUEST AND RESPONSE BODY
    //----
    const body: false | null | IHttpMigrateRoute.IBody = emplaceBodySchema(
      props.document,
    )("request")((schema) =>
      emplaceReference({
        document: props.document,
        name:
          EndpointUtil.pascal(`I/Api/${props.path}`) +
          "." +
          EndpointUtil.pascal(`${props.method}/Body`),
        schema,
      }),
    )(props.operation.requestBody);
    const successResponse = selectSuccessResponse(props.operation.responses);
    const success: false | null | IHttpMigrateRoute.ISuccess = (() => {
      const body = emplaceBodySchema(props.document)("response")((schema) =>
        emplaceReference({
          document: props.document,
          name:
            EndpointUtil.pascal(`I/Api/${props.path}`) +
            "." +
            EndpointUtil.pascal(`${props.method}/Response`),
          schema,
        }),
      )(successResponse?.[1]);
      return body
        ? {
            ...body,
            status: successResponse![0],
          }
        : body;
    })();

    const failures: string[] = [];
    if (body === false)
      failures.push(
        `supports only JSON, "application/x-www-form-urlencoded", "multipart/form-data" and "text/plain" content types in the request body.`,
      );
    if (success === false)
      failures.push(
        `supports only JSON, "application/x-www-form-urlencoded" and "text/plain" content types in the response body.`,
      );

    //----
    // HEADERS AND QUERY
    //---
    const [headers, query, cookies] = (
      ["header", "query", "cookie"] as const
    ).map((type) => {
      // FIND TARGET PARAMETERS
      const parameters: OpenApi.IOperation.IParameter[] = (
        props.operation.parameters ?? []
      ).filter((p) => {
        const matches: boolean =
          type === "query"
            ? p.in === "query" || p.in === "querystring"
            : p.in === type;
        return (
          matches &&
          !(
            type === "header" &&
            p.name !== undefined &&
            IGNORED_HEADER_PARAMETERS.has(p.name.toLowerCase())
          )
        );
      });
      if (parameters.length === 0) return null;

      if (type === "query") {
        const querystrings = parameters.filter((p) => p.in === "querystring");
        const queries = parameters.filter((p) => p.in === "query");
        if (querystrings.length > 1) {
          failures.push("querystring parameter must appear at most once");
          return false;
        }
        if (querystrings.length !== 0 && queries.length !== 0) {
          failures.push(
            "querystring parameter cannot coexist with query parameters",
          );
          return false;
        }
      }

      const canonical = (name: string): string =>
        type === "header" ? name.toLowerCase() : name;
      const named = parameters.filter((p) => p.name !== undefined);
      if (named.length !== parameters.length) {
        failures.push(`${type} typed parameters must have a name`);
        return false;
      }
      if (new Set(named.map((p) => canonical(p.name!))).size !== named.length) {
        failures.push(`${type} typed parameter names must be unique`);
        return false;
      }

      const out = (
        elem: {
          schema: OpenApi.IJsonSchema;
          title?: string;
          description?: string;
          example?: any;
          examples?: Record<string, any>;
          querystring?: IHttpMigrateRoute.IQuerystring;
        },
        serializations: IHttpMigrateRoute.ISerialization[],
      ) =>
        ({
          ...elem,
          name: type,
          key: type,
          required: parameters.some((p) => p.required === true),
          parameters: serializations,
          title: () => elem.title,
          description: () => elem.description,
          example: () => elem.example,
          examples: () => elem.examples,
        }) satisfies IHttpMigrateRoute.IHeaders;

      if (
        type === "query" &&
        parameters[0]?.in === "querystring" &&
        parameters[0].content !== undefined
      ) {
        const parameter = parameters[0];
        const entries = Object.entries(parameter.content ?? {}).filter(
          (entry): entry is [string, OpenApi.IOperation.IMediaType] =>
            entry[1] !== undefined,
        );
        if (entries.length !== 1) {
          failures.push(
            "querystring parameter must define exactly one content media type",
          );
          return false;
        }
        const [mediaType, media] = entries[0]!;
        const normalized: string = normalizeMediaType(mediaType);
        const schema: OpenApi.IJsonSchema = resolveSchema(props.document)(
          parameter.schema,
        );
        if (
          normalized === "application/x-www-form-urlencoded" &&
          OpenApiTypeChecker.isObject(schema) === false
        ) {
          failures.push(
            "application/x-www-form-urlencoded querystring parameter requires an object schema",
          );
          return false;
        }
        if (
          normalized !== "application/x-www-form-urlencoded" &&
          isJsonMediaType(normalized) === false &&
          OpenApiTypeChecker.isBoolean(schema) === false &&
          OpenApiTypeChecker.isInteger(schema) === false &&
          OpenApiTypeChecker.isNumber(schema) === false &&
          OpenApiTypeChecker.isString(schema) === false
        ) {
          failures.push(
            `querystring media type ${JSON.stringify(normalized)} requires a scalar schema or JSON representation`,
          );
          return false;
        }
        return out(
          {
            ...parameter,
            schema: sanitizeSchema(props.document)(parameter.schema),
            querystring: {
              type: normalized,
              media: () => media,
            },
          },
          [],
        );
      }

      // CHECK PARAMETER TYPES -> TO BE OBJECT
      const parameterEntries = parameters.map((parameter) => ({
        parameter,
        schema: resolveSchema(props.document)(parameter.schema),
      }));
      const objectParameters = parameterEntries.filter((entry) =>
        OpenApiTypeChecker.isObject(entry.schema),
      ) as {
        parameter: OpenApi.IOperation.IParameter;
        schema: OpenApi.IJsonSchema.IObject;
      }[];
      const primitives = parameterEntries
        .filter((entry) => !OpenApiTypeChecker.isObject(entry.schema))
        .map((entry) => entry.parameter);
      const serialization: IHttpMigrateRoute.ISerialization[] = parameters.map(
        (parameter) => {
          const object = objectParameters.find(
            (entry) => entry.parameter === parameter,
          );
          const schema =
            parameterEntries.find((entry) => entry.parameter === parameter)
              ?.schema ?? parameter.schema;
          const style =
            parameter.style ?? (type === "header" ? "simple" : "form");
          const explode =
            parameter.explode ?? (style === "form" || style === "cookie");
          const allowed =
            type === "header"
              ? style === "simple"
              : type === "cookie"
                ? style === "form" || style === "cookie"
                : [
                    "form",
                    "spaceDelimited",
                    "pipeDelimited",
                    "deepObject",
                  ].includes(style);
          if (allowed === false)
            failures.push(
              `${type} parameter ${JSON.stringify(parameter.name)} does not support ${JSON.stringify(style)} style`,
            );
          if (style === "deepObject") {
            if (object === undefined)
              failures.push(
                `query parameter ${JSON.stringify(parameter.name)} requires an object schema for deepObject style`,
              );
            if (explode === false)
              failures.push(
                `query parameter ${JSON.stringify(parameter.name)} requires explode: true for deepObject style`,
              );
          }
          if (style === "spaceDelimited" || style === "pipeDelimited") {
            if (
              !OpenApiTypeChecker.isArray(schema) &&
              !OpenApiTypeChecker.isTuple(schema) &&
              !OpenApiTypeChecker.isObject(schema)
            )
              failures.push(
                `query parameter ${JSON.stringify(parameter.name)} requires an array or object schema for ${style} style`,
              );
            if (explode)
              failures.push(
                `query parameter ${JSON.stringify(parameter.name)} requires explode: false for ${style} style`,
              );
          }
          return {
            name: parameter.name!,
            key: object === undefined ? parameter.name! : null,
            properties:
              object === undefined
                ? null
                : Object.keys(object.schema.properties ?? {}),
            requiredProperties:
              object === undefined ? null : (object.schema.required ?? []),
            additionalProperties:
              object !== undefined &&
              object.schema.additionalProperties !== false,
            style: style as IHttpMigrateRoute.ISerialization["style"],
            explode,
            parameter: () => parameter,
          };
        },
      );
      if (objectParameters.length === 1 && primitives.length === 0)
        return out(
          sanitizeParameter(props.document)(parameters[0]!),
          serialization,
        );
      else if (objectParameters.length > 1) {
        failures.push(`${type} typed parameters must be only one object type`);
        return false;
      }

      // GATHER TO OBJECT TYPE
      const dto: OpenApi.IJsonSchema.IObject | null =
        objectParameters[0]?.schema ?? null;
      const primitiveNames = new Set(primitives.map((p) => canonical(p.name!)));
      const collisions = Object.keys(dto?.properties ?? {}).filter((name) =>
        primitiveNames.has(canonical(name)),
      );
      if (collisions.length !== 0) {
        failures.push(
          `${type} typed parameter properties conflict: ${collisions.join(", ")}`,
        );
        return false;
      }
      const primitiveProperties: Record<string, OpenApi.IJsonSchema> =
        Object.fromEntries(
          primitives.map((p) => [
            p.name,
            {
              ...p.schema,
              description: p.schema.description ?? p.description,
            },
          ]),
        );
      const primitiveRequired: string[] = primitives
        .filter((p) => p.required)
        .map((p) => p.name!);
      const entire: OpenApi.IJsonSchema.IObject =
        OpenApiSchemaSanitizer.omitEmptyRequired({
          type: "object",
          properties: Object.fromEntries([
            ...Object.entries(primitiveProperties),
            ...(dto ? Object.entries(dto.properties ?? {}) : []),
          ]),
          required: [
            ...new Set([
              ...primitiveRequired,
              ...(objectParameters[0]?.parameter.required
                ? (dto?.required ?? [])
                : []),
            ]),
          ],
          additionalProperties: dto?.additionalProperties,
        });
      const schema: OpenApi.IJsonSchema =
        objectParameters[0] !== undefined &&
        objectParameters[0].parameter.required !== true &&
        (dto?.required?.length ?? 0) !== 0
          ? {
              // Omission is valid, but once an object-owned key is supplied
              // the object's own required fields apply again.
              oneOf: [
                OpenApiSchemaSanitizer.omitEmptyRequired({
                  type: "object",
                  properties: primitiveProperties,
                  required: primitiveRequired,
                  additionalProperties: false,
                }),
                OpenApiSchemaSanitizer.omitEmptyRequired({
                  ...entire,
                  required: [...primitiveRequired, ...(dto?.required ?? [])],
                }),
              ],
            }
          : entire;
      return parameters.length === 0
        ? null
        : out(
            {
              schema: emplaceReference({
                document: props.document,
                name:
                  EndpointUtil.pascal(`I/Api/${props.path}`) +
                  "." +
                  EndpointUtil.pascal(`${props.method}/${type}`),
                schema,
              }),
            },
            serialization,
          );
    });

    //----
    // PATH PARAMETERS
    //----
    const parameterNames: string[] = [
      ...props.path.matchAll(/\{([^{}]+)\}/g),
    ].map((match) => match[1]!);
    const uniqueParameterNames: string[] = [...new Set(parameterNames)];
    const pathParameters: OpenApi.IOperation.IParameter[] = (
      props.operation.parameters ?? []
    ).filter((p) => p.in === "path");
    const duplicatePathNames: string[] = pathParameters
      .map((p) => p.name)
      .filter(
        (name, index, array): name is string =>
          name !== undefined && array.indexOf(name) !== index,
      );
    if (duplicatePathNames.length !== 0)
      failures.push(
        `path parameter names must be unique: ${[...new Set(duplicatePathNames)].join(", ")}`,
      );
    if (
      pathParameters.some(
        (p) => p.name === undefined || !uniqueParameterNames.includes(p.name),
      )
    )
      failures.push("path parameter names are not matched with its full path.");
    else {
      for (const name of uniqueParameterNames)
        if (pathParameters.find((p) => p.name === name) === undefined)
          pathParameters.push({
            name,
            in: "path",
            required: true,
            schema: { type: "string" },
          });
      pathParameters.sort(
        (a, b) =>
          uniqueParameterNames.indexOf(a.name!) -
          uniqueParameterNames.indexOf(b.name!),
      );
      for (const parameter of pathParameters) {
        const style = parameter.style ?? "simple";
        if (!["matrix", "label", "simple"].includes(style))
          failures.push(
            `path parameter ${JSON.stringify(parameter.name)} does not support ${JSON.stringify(style)} style`,
          );
      }
      props.operation.parameters = [
        ...pathParameters,
        ...(props.operation.parameters ?? []).filter((p) => p.in !== "path"),
      ];
    }
    if (failures.length) return failures;

    const usedParameterKeys = new Set<string>();
    const parameters: IHttpMigrateRoute.IParameter[] = pathParameters.map(
      (parameter) => {
        let key: string = EndpointUtil.normalize(parameter.name!).replace(
          /[^a-zA-Z0-9_$]/g,
          "_",
        );
        while (
          NamingConvention.variable(key) === false ||
          usedParameterKeys.has(key)
        )
          key = `_${key}`;
        usedParameterKeys.add(key);
        const style = parameter.style ?? "simple";
        return {
          name: parameter.name!,
          key,
          schema: parameter.schema,
          style: style as IHttpMigrateRoute.IParameter["style"],
          explode: parameter.explode ?? false,
          parameter: () => parameter,
        };
      },
    );
    return {
      method: props.method,
      path: props.path,
      emendedPath: props.emendedPath,
      accessor: ["@lazy"],
      parameters,
      headers: headers || null,
      cookies: cookies || null,
      query: query || null,
      body: body || null,
      success: success || null,
      exceptions: Object.fromEntries(
        Object.entries(props.operation.responses ?? {})
          .filter(([key]) => {
            if (isSuccessStatus(key)) return false;
            return key !== "default" || successResponse?.[0] !== "default";
          })
          .map(([status, response]) => {
            const media = findJsonMedia(response.content);
            const schema =
              media !== undefined
                ? (sanitizeMediaSchema(props.document)(media[1]) ?? {})
                : {};
            return [
              status,
              {
                schema,
                response: () => response,
                media: () =>
                  media?.[1] ?? ({} satisfies OpenApi.IOperation.IMediaType),
              } satisfies IHttpMigrateRoute.IException,
            ];
          }),
      ),
      comment: () =>
        writeRouteComment({
          operation: props.operation,
          parameters,
          query: query || null,
          body: body || null,
        }),
      operation: () => props.operation,
    } satisfies IHttpMigrateRoute as IHttpMigrateRoute;
  };

  const writeRouteComment = (props: {
    operation: OpenApi.IOperation;
    parameters: IHttpMigrateRoute.IParameter[];
    query: IHttpMigrateRoute.IQuery | null;
    body: IHttpMigrateRoute.IBody | null;
  }): string => {
    // write basic description combining with summary
    let description: string = props.operation.description ?? "";
    if (!!props.operation.summary?.length) {
      const summary: string = props.operation.summary.endsWith(".")
        ? props.operation.summary
        : props.operation.summary + ".";
      if (
        !!description.length &&
        !description.startsWith(props.operation.summary)
      )
        description = `${summary}\n\n${description}`;
    }
    description = description
      .split("\n")
      .map((s) => s.trim())
      .join("\n");

    //----
    // compose jsdoc comment tags
    //----
    const commentTags: string[] = [];
    const add = (text: string) => {
      if (commentTags.every((line) => line !== text)) commentTags.push(text);
    };

    // parameters
    add("@param connection");
    for (const p of props.parameters ?? []) {
      const param = p.parameter();
      if (param.description) {
        const text: string = param.description!;
        add(`@param ${p.name} ${writeIndented(text, p.name.length + 8)}`);
      }
    }
    if (props.body?.description()?.length)
      add(`@param body ${writeIndented(props.body.description()!, 12)}`);

    // security
    for (const security of props.operation.security ?? [])
      for (const [name, scopes] of Object.entries(security))
        add(`@security ${[name, ...scopes].join("")}`);

    // categorizing tags
    if (props.operation.tags)
      props.operation.tags.forEach((name) => add(`@tag ${name}`));

    // deprecated
    if (props.operation.deprecated) add("@deprecated");

    // plugin properties
    for (const [key, value] of Object.entries(props.operation)) {
      if (key.startsWith("x-") === false) continue;
      else if (
        value !== null &&
        typeof value !== "boolean" &&
        typeof value !== "number" &&
        typeof value !== "string"
      )
        continue;
      add(`@${key} ${value}`);
    }

    // finalize description
    description = description.length
      ? commentTags.length
        ? `${description}\n\n${commentTags.join("\n")}`
        : description
      : commentTags.join("\n");
    description = description.split("*/").join("*\\/");
    return description;
  };

  const writeIndented = (text: string, spaces: number): string =>
    text
      .split("\n")
      .map((s) => s.trim())
      .map((s, i) => (i === 0 ? s : `${" ".repeat(spaces)}${s}`))
      .join("\n");

  const emplaceBodySchema =
    (document: OpenApi.IDocument) =>
    (from: "request" | "response") =>
    (
      emplacer: (schema: OpenApi.IJsonSchema) => OpenApi.IJsonSchema.IReference,
    ) =>
    (meta?: {
      description?: string;
      content?: Partial<Record<string, OpenApi.IOperation.IMediaType>>; // ISwaggerRouteBodyContent;
      required?: boolean;
      "x-nestia-encrypted"?: boolean;
    }): false | null | IHttpMigrateRoute.IBody => {
      if (!meta?.content) return null;

      const entries: [string, OpenApi.IOperation.IMediaType][] = Object.entries(
        meta.content,
      ).filter(([_, v]) => !!v) as [string, OpenApi.IOperation.IMediaType][];
      const json = entries.find((e) =>
        meta["x-nestia-encrypted"] === true
          ? normalizeMediaType(e[0]) === "text/plain" || isJsonMediaType(e[0])
          : isJsonMediaType(e[0]),
      );
      if (json) {
        const schema = sanitizeMediaSchema(document)(json[1]);
        return schema
          ? {
              type:
                normalizeMediaType(json[0]) === "*/*" ||
                normalizeMediaType(json[0]) === "text/plain"
                  ? "application/json"
                  : (normalizeMediaType(
                      json[0],
                    ) as IHttpMigrateRoute.IBody["type"]),
              name: "body",
              key: "body",
              required: from === "request" && meta.required === true,
              schema: isNotObjectLiteral(schema)
                ? sanitizeSchema(document)(schema)
                : emplacer(schema),
              description: () => meta.description,
              media: () => json[1],
              "x-nestia-encrypted": meta["x-nestia-encrypted"],
            }
          : null;
      }

      const query = entries.find(
        (e) => normalizeMediaType(e[0]) === "application/x-www-form-urlencoded",
      );
      if (query) {
        const schema = sanitizeMediaSchema(document)(query[1]);
        return schema
          ? {
              type: "application/x-www-form-urlencoded",
              name: "body",
              key: "body",
              required: from === "request" && meta.required === true,
              schema: isNotObjectLiteral(schema)
                ? sanitizeSchema(document)(schema)
                : emplacer(schema),
              description: () => meta.description,
              media: () => query[1],
            }
          : null;
      }

      const text = entries.find(
        (e) => normalizeMediaType(e[0]) === "text/plain",
      );
      if (text)
        return {
          type: "text/plain",
          name: "body",
          key: "body",
          required: from === "request" && meta.required === true,
          schema: { type: "string" },
          description: () => meta.description,
          media: () => text[1],
        };

      if (from === "request") {
        const multipart = entries.find(
          (e) => normalizeMediaType(e[0]) === "multipart/form-data",
        );
        if (multipart) {
          const schema = sanitizeMediaSchema(document)(multipart[1]);
          return {
            type: "multipart/form-data",
            name: "body",
            key: "body",
            required: meta.required === true,
            schema: schema
              ? isNotObjectLiteral(schema)
                ? sanitizeSchema(document)(schema)
                : emplacer(schema)
              : {},
            description: () => meta.description,
            media: () => multipart[1],
          };
        }
      }
      return false;
    };

  const sanitizeOperationSchemas =
    (document: OpenApi.IDocument) =>
    (operation: OpenApi.IOperation): void => {
      operation.parameters?.forEach((parameter) => {
        parameter.schema = sanitizeSchema(document)(parameter.schema);
        sanitizeContentSchemas(document)(parameter.content);
      });
      sanitizeContentSchemas(document)(operation.requestBody?.content);
      Object.values(operation.responses ?? {}).forEach((response) =>
        sanitizeContentSchemas(document)(response.content),
      );
    };

  const sanitizeContentSchemas =
    (
      document: OpenApi.IDocument,
    ): ((content: OpenApi.IOperation.IContent | undefined) => void) =>
    (content) => {
      Object.values(content ?? {}).forEach((media) => {
        if (media !== undefined) sanitizeMediaSchema(document)(media);
      });
    };

  const sanitizeMediaSchema =
    (document: OpenApi.IDocument) =>
    (media: OpenApi.IOperation.IMediaType): OpenApi.IJsonSchema | undefined => {
      if (media.schema === undefined) return undefined;
      media.schema = sanitizeSchema(document)(media.schema);
      return media.schema;
    };

  const findJsonMedia = (
    content: OpenApi.IOperation.IContent | undefined,
  ): [string, OpenApi.IOperation.IMediaType] | undefined =>
    Object.entries(content ?? {}).find(
      (entry): entry is [string, OpenApi.IOperation.IMediaType] => {
        const [type, media] = entry;
        return media !== undefined && isJsonMediaType(type);
      },
    );

  const emplaceReference = (props: {
    document: OpenApi.IDocument;
    name: string;
    schema: OpenApi.IJsonSchema;
  }): OpenApi.IJsonSchema.IReference => {
    props.document.components.schemas ??= {};
    ObjectDictionary.set(
      props.document.components.schemas,
      props.name,
      sanitizeSchema(props.document)(props.schema),
    );
    return {
      $ref: `#/components/schemas/${props.name}`,
    } satisfies OpenApi.IJsonSchema.IReference;
  };

  const sanitizeParameter =
    (document: OpenApi.IDocument) =>
    (
      parameter: OpenApi.IOperation.IParameter,
    ): OpenApi.IOperation.IParameter => ({
      ...parameter,
      schema: sanitizeSchema(document)(parameter.schema),
    });

  const resolveSchema =
    (document: OpenApi.IDocument) =>
    (input: OpenApi.IJsonSchema): OpenApi.IJsonSchema => {
      let schema: OpenApi.IJsonSchema = input;
      const visited: Set<string> = new Set();
      while (OpenApiTypeChecker.isReference(schema)) {
        const key: string = schema.$ref.replace("#/components/schemas/", "");
        const found: OpenApi.IJsonSchema | undefined = ObjectDictionary.get(
          document.components.schemas,
          key,
        );
        if (key === schema.$ref || visited.has(key) || found === undefined)
          break;
        visited.add(key);
        schema = found;
      }
      return schema;
    };

  const sanitizeSchema =
    (document: OpenApi.IDocument) =>
    (schema: OpenApi.IJsonSchema): OpenApi.IJsonSchema => {
      const visited: Set<string> = new Set();
      return sanitizeSchemaRecursively(document)(visited)(schema);
    };

  const sanitizeSchemaRecursively =
    (document: OpenApi.IDocument) =>
    (visited: Set<string>) =>
    (schema: OpenApi.IJsonSchema): OpenApi.IJsonSchema => {
      if (OpenApiTypeChecker.isReference(schema)) {
        const key: string | null = schema.$ref.startsWith(
          "#/components/schemas/",
        )
          ? schema.$ref.replace("#/components/schemas/", "")
          : null;
        if (key === null || visited.has(key)) return schema;
        const found: OpenApi.IJsonSchema | undefined = ObjectDictionary.get(
          document.components.schemas,
          key,
        );
        if (found !== undefined) {
          visited.add(key);
          ObjectDictionary.set(
            document.components.schemas!,
            key,
            sanitizeSchemaRecursively(document)(visited)(found),
          );
        }
        return schema;
      }
      const sanitized: OpenApi.IJsonSchema =
        OpenApiSchemaSanitizer.omitEmptyRequiredDeep(schema);
      visitSchemaReferences(document)(visited)(sanitized);
      return sanitized;
    };

  const visitSchemaReferences =
    (document: OpenApi.IDocument) =>
    (visited: Set<string>) =>
    (schema: OpenApi.IJsonSchema): void => {
      const visit = sanitizeSchemaRecursively(document)(visited);
      if (OpenApiTypeChecker.isOneOf(schema))
        schema.oneOf.forEach((value) => visit(value));
      else if (OpenApiTypeChecker.isTuple(schema)) {
        schema.prefixItems.forEach((value) => visit(value));
        if (
          typeof schema.additionalItems === "object" &&
          schema.additionalItems !== null
        )
          visit(schema.additionalItems);
      } else if (OpenApiTypeChecker.isArray(schema)) visit(schema.items);
      else if (OpenApiTypeChecker.isObject(schema)) {
        Object.values(schema.properties ?? {}).forEach((value) => visit(value));
        if (
          typeof schema.additionalProperties === "object" &&
          schema.additionalProperties !== null
        )
          visit(schema.additionalProperties);
      }
    };

  const isNotObjectLiteral = (schema: OpenApi.IJsonSchema): boolean =>
    OpenApiTypeChecker.isReference(schema) ||
    OpenApiTypeChecker.isBoolean(schema) ||
    OpenApiTypeChecker.isNumber(schema) ||
    OpenApiTypeChecker.isString(schema) ||
    OpenApiTypeChecker.isUnknown(schema) ||
    (OpenApiTypeChecker.isOneOf(schema) &&
      schema.oneOf.every(isNotObjectLiteral)) ||
    (OpenApiTypeChecker.isArray(schema) && isNotObjectLiteral(schema.items));

  const normalizeMediaType = (type: string): string =>
    type.split(";", 1)[0]!.trim().toLowerCase();

  const isJsonMediaType = (type: string): boolean => {
    const normalized: string = normalizeMediaType(type);
    return (
      normalized === "application/json" ||
      normalized.endsWith("+json") ||
      normalized === "*/*"
    );
  };
}

const isSuccessStatus = (status: string): boolean =>
  /^2\d\d$/.test(status) || /^2xx$/i.test(status);

const selectSuccessResponse = (
  responses: Record<string, OpenApi.IOperation.IResponse> | undefined,
): [string, OpenApi.IOperation.IResponse] | undefined => {
  const entries = Object.entries(responses ?? {}).filter(([status]) =>
    isSuccessStatus(status),
  );
  entries.sort(([x], [y]) => {
    const priority = (status: string): number =>
      status === "200"
        ? 0
        : status === "201"
          ? 1
          : /^2\d\d$/.test(status)
            ? Number(status)
            : 300;
    return priority(x) - priority(y) || x.localeCompare(y);
  });
  return (
    entries[0] ??
    (responses?.default ? (["default", responses.default] as const) : undefined)
  );
};

const IGNORED_HEADER_PARAMETERS = new Set([
  "accept",
  "authorization",
  "content-type",
]);
