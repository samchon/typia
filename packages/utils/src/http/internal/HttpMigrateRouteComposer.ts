import { IHttpMigrateRoute, OpenApi } from "@typia/interface";

import { NamingConvention } from "../../utils/NamingConvention";
import { EndpointUtil } from "../../utils/internal/EndpointUtil";
import { OpenApiTypeChecker } from "../../validators/OpenApiTypeChecker";

export namespace HttpMigrateRouteComposer {
  export interface IProps {
    document: OpenApi.IDocument;
    method: "head" | "get" | "post" | "put" | "patch" | "delete";
    path: string;
    emendedPath: string;
    operation: OpenApi.IOperation;
  }
  export const compose = (props: IProps): IHttpMigrateRoute | string[] => {
    //----
    // REQUEST AND RESPONSE BODY
    //----
    const body: false | null | IHttpMigrateRoute.IBody = emplaceBodySchema(
      "request",
    )((schema) =>
      emplaceReference({
        document: props.document,
        name:
          EndpointUtil.pascal(`I/Api/${props.path}`) +
          "." +
          EndpointUtil.pascal(`${props.method}/Body`),
        schema,
      }),
    )(props.operation.requestBody);
    const success: false | null | IHttpMigrateRoute.ISuccess = (() => {
      const body = emplaceBodySchema("response")((schema) =>
        emplaceReference({
          document: props.document,
          name:
            EndpointUtil.pascal(`I/Api/${props.path}`) +
            "." +
            EndpointUtil.pascal(`${props.method}/Response`),
          schema,
        }),
      )(
        props.operation.responses?.["201"] ??
          props.operation.responses?.["200"] ??
          props.operation.responses?.default,
      );
      return body
        ? {
            ...body,
            status: props.operation.responses?.["201"]
              ? "201"
              : props.operation.responses?.["200"]
                ? "200"
                : "default",
          }
        : body;
    })();

    const failures: string[] = [];
    if (body === false)
      failures.push(
        `supports only "application/json", "application/x-www-form-urlencoded", "multipart/form-data" and "text/plain" content type in the request body.`,
      );
    if (success === false)
      failures.push(
        `supports only "application/json", "application/x-www-form-urlencoded" and "text/plain" content type in the response body.`,
      );

    //----
    // HEADERS AND QUERY
    //---
    const [headers, query] = ["header", "query"].map((type) => {
      // FIND TARGET PARAMETERS
      const parameters: OpenApi.IOperation.IParameter[] = (
        props.operation.parameters ?? []
      ).filter((p) => p.in === type);
      if (parameters.length === 0) return null;

      // CHECK PARAMETER TYPES -> TO BE OBJECT
      const objects = parameters
        .map((p) =>
          OpenApiTypeChecker.isObject(p.schema)
            ? p.schema
            : OpenApiTypeChecker.isReference(p.schema) &&
                OpenApiTypeChecker.isObject(
                  props.document.components.schemas?.[
                    p.schema.$ref.replace(`#/components/schemas/`, ``)
                  ] ?? {},
                )
              ? p.schema
              : null!,
        )
        .filter((s) => !!s);
      const primitives = parameters.filter(
        (p) =>
          OpenApiTypeChecker.isBoolean(p.schema) ||
          OpenApiTypeChecker.isInteger(p.schema) ||
          OpenApiTypeChecker.isNumber(p.schema) ||
          OpenApiTypeChecker.isString(p.schema) ||
          OpenApiTypeChecker.isArray(p.schema) ||
          OpenApiTypeChecker.isTuple(p.schema),
      );
      const out = (elem: {
        schema: OpenApi.IJsonSchema;
        title?: string;
        description?: string;
        example?: any;
        examples?: Record<string, any>;
      }) =>
        ({
          ...elem,
          name: type,
          key: type,
          title: () => elem.title,
          description: () => elem.description,
          example: () => elem.example,
          examples: () => elem.examples,
        }) satisfies IHttpMigrateRoute.IHeaders;

      if (objects.length === 1 && primitives.length === 0)
        return out(parameters[0]!);
      else if (objects.length > 1) {
        failures.push(`${type} typed parameters must be only one object type`);
        return false;
      }

      // GATHER TO OBJECT TYPE
      const dto: OpenApi.IJsonSchema.IObject | null = objects[0]
        ? OpenApiTypeChecker.isObject(objects[0])
          ? objects[0]
          : ((props.document.components.schemas ?? {})[
              (objects[0] as OpenApi.IJsonSchema.IReference).$ref.replace(
                `#/components/schemas/`,
                ``,
              )
            ] as OpenApi.IJsonSchema.IObject)
        : null;
      const entire: OpenApi.IJsonSchema.IObject[] = [
        ...objects.map((o) =>
          OpenApiTypeChecker.isObject(o)
            ? o
            : (props.document.components.schemas?.[
                o.$ref.replace(`#/components/schemas/`, ``)
              ]! as OpenApi.IJsonSchema.IObject),
        ),
        {
          type: "object",
          properties: Object.fromEntries([
            ...primitives.map((p) => [
              p.name,
              {
                ...p.schema,
                description: p.schema.description ?? p.description,
              },
            ]),
            ...(dto ? Object.entries(dto.properties ?? {}) : []),
          ]),
          required: [
            ...new Set([
              ...primitives.filter((p) => p.required).map((p) => p.name!),
              ...(dto?.required ?? []),
            ]),
          ],
        },
      ];
      return parameters.length === 0
        ? null
        : out({
            schema: emplaceReference({
              document: props.document,
              name:
                EndpointUtil.pascal(`I/Api/${props.path}`) +
                "." +
                EndpointUtil.pascal(`${props.method}/${type}`),
              schema: {
                type: "object",
                properties: Object.fromEntries([
                  ...new Map<string, OpenApi.IJsonSchema>(
                    entire
                      .map((o) =>
                        Object.entries(o.properties ?? {}).map(
                          ([name, schema]) =>
                            [
                              name,
                              {
                                ...schema,
                                description:
                                  schema.description ?? schema.description,
                              } as OpenApi.IJsonSchema,
                            ] as const,
                        ),
                      )
                      .flat(),
                  ),
                ]),
                required: [
                  ...new Set(entire.map((o) => o.required ?? []).flat()),
                ],
              } satisfies OpenApi.IJsonSchema.IObject,
            }),
          });
    });

    //----
    // PATH PARAMETERS
    //----
    const parameterNames: string[] = EndpointUtil.splitWithNormalization(
      props.emendedPath,
    )
      .filter((str) => str[0] === ":")
      .map((str) => str.substring(1));
    const pathParameters: OpenApi.IOperation.IParameter[] = (
      props.operation.parameters ?? []
    ).filter((p) => p.in === "path");
    if (parameterNames.length !== pathParameters.length)
      if (
        pathParameters.length < parameterNames.length &&
        pathParameters.every(
          (p) => p.name !== undefined && parameterNames.includes(p.name),
        )
      ) {
        for (const name of parameterNames)
          if (pathParameters.find((p) => p.name === name) === undefined)
            pathParameters.push({
              name,
              in: "path",
              schema: { type: "string" },
            });
        pathParameters.sort(
          (a, b) =>
            parameterNames.indexOf(a.name!) - parameterNames.indexOf(b.name!),
        );
        props.operation.parameters = [
          ...pathParameters,
          ...(props.operation.parameters ?? []).filter((p) => p.in !== "path"),
        ];
      } else
        failures.push(
          "number of path parameters are not matched with its full path.",
        );
    if (failures.length) return failures;

    const parameters: IHttpMigrateRoute.IParameter[] = (
      props.operation.parameters ?? []
    )
      .filter((p) => p.in === "path")
      .map((p, i) => ({
        // FILL KEY NAME IF NOT EXISTS
        name: parameterNames[i]!,
        key: (() => {
          let key: string = EndpointUtil.normalize(parameterNames[i]!);
          if (NamingConvention.variable(key)) return key;
          while (true) {
            key = "_" + key;
            if (!parameterNames.some((s) => s === key)) return key;
          }
        })(),
        schema: p.schema,
        parameter: () => p,
      }));
    return {
      method: props.method,
      path: props.path,
      emendedPath: props.emendedPath,
      accessor: ["@lazy"],
      parameters: (props.operation.parameters ?? [])
        .filter((p) => p.in === "path")
        .map((p, i) => ({
          // FILL KEY NAME IF NOT EXISTS
          name: parameterNames[i]!,
          key: (() => {
            let key: string = EndpointUtil.normalize(parameterNames[i]!);
            if (NamingConvention.variable(key)) return key;
            while (true) {
              key = "_" + key;
              if (!parameterNames.some((s) => s === key)) return key;
            }
          })(),
          schema: p.schema,
          parameter: () => p,
        })),
      headers: headers || null,
      query: query || null,
      body: body || null,
      success: success || null,
      exceptions: Object.fromEntries(
        Object.entries(props.operation.responses ?? {})
          .filter(
            ([key]) => key !== "200" && key !== "201" && key !== "default",
          )
          .map(([status, response]) => [
            status,
            {
              schema: (response.content?.["application/json"]?.schema ??
                {}) satisfies OpenApi.IJsonSchema,
              response: () => response,
              media: () =>
                (response.content?.["application/json"] ??
                  {}) satisfies OpenApi.IJsonSchema,
            } satisfies IHttpMigrateRoute.IException,
          ]),
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
    (from: "request" | "response") =>
    (
      emplacer: (schema: OpenApi.IJsonSchema) => OpenApi.IJsonSchema.IReference,
    ) =>
    (meta?: {
      description?: string;
      content?: Partial<Record<string, OpenApi.IOperation.IMediaType>>; // ISwaggerRouteBodyContent;
      "x-nestia-encrypted"?: boolean;
    }): false | null | IHttpMigrateRoute.IBody => {
      if (!meta?.content) return null;

      const entries: [string, OpenApi.IOperation.IMediaType][] = Object.entries(
        meta.content,
      ).filter(([_, v]) => !!v) as [string, OpenApi.IOperation.IMediaType][];
      const json = entries.find((e) =>
        meta["x-nestia-encrypted"] === true
          ? e[0].includes("text/plain") || e[0].includes("application/json")
          : e[0].includes("application/json") || e[0].includes("*/*"),
      );
      if (json) {
        const { schema } = json[1];
        return schema || from === "response"
          ? {
              type: "application/json",
              name: "body",
              key: "body",
              schema: schema
                ? isNotObjectLiteral(schema)
                  ? schema
                  : emplacer(schema)
                : {},
              description: () => meta.description,
              media: () => json[1],
              "x-nestia-encrypted": meta["x-nestia-encrypted"],
            }
          : null;
      }

      const query = entries.find((e) =>
        e[0].includes("application/x-www-form-urlencoded"),
      );
      if (query) {
        const { schema } = query[1];
        return schema || from === "response"
          ? {
              type: "application/x-www-form-urlencoded",
              name: "body",
              key: "body",
              schema: schema
                ? isNotObjectLiteral(schema)
                  ? schema
                  : emplacer(schema)
                : {},
              description: () => meta.description,
              media: () => query[1],
            }
          : null;
      }

      const text = entries.find((e) => e[0].includes("text/plain"));
      if (text)
        return {
          type: "text/plain",
          name: "body",
          key: "body",
          schema: { type: "string" },
          description: () => meta.description,
          media: () => text[1],
        };

      if (from === "request") {
        const multipart = entries.find((e) =>
          e[0].includes("multipart/form-data"),
        );
        if (multipart) {
          const { schema } = multipart[1];
          return {
            type: "multipart/form-data",
            name: "body",
            key: "body",
            schema: schema
              ? isNotObjectLiteral(schema)
                ? schema
                : emplacer(schema)
              : {},
            description: () => meta.description,
            media: () => multipart[1],
          };
        }
      }
      return false;
    };

  const emplaceReference = (props: {
    document: OpenApi.IDocument;
    name: string;
    schema: OpenApi.IJsonSchema;
  }): OpenApi.IJsonSchema.IReference => {
    props.document.components.schemas ??= {};
    props.document.components.schemas[props.name] = props.schema;
    return {
      $ref: `#/components/schemas/${props.name}`,
    } satisfies OpenApi.IJsonSchema.IReference;
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
}
