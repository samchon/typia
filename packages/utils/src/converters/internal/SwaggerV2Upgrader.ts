import { IJsonSchemaAttribute, OpenApi, SwaggerV2 } from "@typia/interface";

import { OpenApiTypeChecker } from "../../validators/OpenApiTypeChecker";
import { SwaggerV2TypeChecker } from "../../validators/SwaggerV2TypeChecker";
import { OpenApiExclusiveEmender } from "./OpenApiExclusiveEmender";

export namespace SwaggerV2Upgrader {
  export const convert = (input: SwaggerV2.IDocument): OpenApi.IDocument => ({
    openapi: "3.2.0",
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
    servers: convertServers(input),
    security: input.security,
    tags: input.tags,
    "x-typia-emended-v12": true,
  });

  /* -----------------------------------------------------------
    OPERATORS
  ----------------------------------------------------------- */
  const convertPathItem =
    (doc: SwaggerV2.IDocument) =>
    (pathItem: SwaggerV2.IPath): OpenApi.IPath => {
      // Convert x-additionalOperations to additionalOperations
      // Promote "query" to standard method (it's a v3.2 standard method)
      const xAdditional = pathItem["x-additionalOperations"];
      const queryOp = xAdditional?.["query"];
      const additionalOperations = xAdditional
        ? Object.fromEntries(
            Object.entries(xAdditional)
              .filter(([key, v]) => key !== "query" && v !== undefined)
              .map(([key, value]) => [
                key,
                convertOperation(doc)(pathItem)(value),
              ]),
          )
        : undefined;
      const { parameters: _parameters, ...rest } = pathItem as any;

      return {
        ...rest,
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
        ...(queryOp
          ? { query: convertOperation(doc)(pathItem)(queryOp) }
          : undefined),
        ...(additionalOperations && Object.keys(additionalOperations).length > 0
          ? { additionalOperations }
          : undefined),
        "x-additionalOperations": undefined,
      };
    };

  const convertOperation =
    (doc: SwaggerV2.IDocument) =>
    (pathItem: SwaggerV2.IPath) =>
    (input: SwaggerV2.IOperation): OpenApi.IOperation => {
      const resolve = (
        p: SwaggerV2.IOperation.IParameter | SwaggerV2.IJsonSchema.IReference,
      ): SwaggerV2.IOperation.IParameter | undefined =>
        "$ref" in p ? doc.parameters?.[p.$ref.split("/").pop() ?? ""] : p;
      const pathParameters: SwaggerV2.IOperation.IParameter[] = (
        pathItem.parameters ?? []
      )
        .map(resolve)
        .filter((p): p is SwaggerV2.IOperation.IParameter => p !== undefined);
      const operationParameters: SwaggerV2.IOperation.IParameter[] = (
        input.parameters ?? []
      )
        .map((p) =>
          resolve(
            p as
              | SwaggerV2.IOperation.IParameter
              | SwaggerV2.IJsonSchema.IReference,
          ),
        )
        .filter((p): p is SwaggerV2.IOperation.IParameter => p !== undefined);
      const parameters: SwaggerV2.IOperation.IGeneralParameter[] =
        mergeParameters(
          pathParameters.filter(isGeneralParameter),
          operationParameters.filter(isGeneralParameter),
        );
      const formData: SwaggerV2.IOperation.IGeneralParameter[] =
        parameters.filter((parameter) => parameter.in === "formData");
      const body: SwaggerV2.IOperation.IBodyParameter | undefined = [
        ...operationParameters,
        ...pathParameters,
      ].find(isBodyParameter) as
        | SwaggerV2.IOperation.IBodyParameter
        | undefined;
      if (body !== undefined && formData.length > 0)
        throw new TypeError(
          "SwaggerV2Upgrader: body and formData parameters cannot coexist.",
        );
      const consumes: string[] = selectMediaTypes(input.consumes, doc.consumes);
      const produces: string[] = selectMediaTypes(input.produces, doc.produces);
      return {
        ...input,
        parameters:
          pathItem.parameters !== undefined || input.parameters !== undefined
            ? parameters
                .filter((parameter) => parameter.in !== "formData")
                .map(convertParameter(doc.definitions ?? {}))
            : undefined,
        requestBody: body
          ? convertRequestBody(doc.definitions ?? {}, consumes)(body)
          : formData.length > 0
            ? convertFormData(doc.definitions ?? {}, consumes)(formData)
            : undefined,
        responses: input.responses
          ? Object.fromEntries(
              Object.entries(input.responses)
                .filter(([_, v]) => v !== undefined)
                .map(
                  ([key, value]) =>
                    [key, convertResponse(doc, produces)(value)!] as const,
                )
                .filter(([_, v]) => v !== undefined),
            )
          : undefined,
        servers:
          input.schemes !== undefined
            ? convertServers({ ...doc, schemes: input.schemes })
            : undefined,
        ...{
          consumes: undefined,
          produces: undefined,
          schemes: undefined,
        },
      };
    };

  const isBodyParameter = (
    input: SwaggerV2.IOperation.IParameter,
  ): input is SwaggerV2.IOperation.IBodyParameter =>
    input.in === "body" ||
    (input as SwaggerV2.IOperation.IBodyParameter).schema !== undefined;

  const isGeneralParameter = (
    input: SwaggerV2.IOperation.IParameter,
  ): input is SwaggerV2.IOperation.IGeneralParameter =>
    isBodyParameter(input) === false;

  const mergeParameters = (
    pathParameters: SwaggerV2.IOperation.IGeneralParameter[],
    operationParameters: SwaggerV2.IOperation.IGeneralParameter[],
  ): SwaggerV2.IOperation.IGeneralParameter[] => {
    const map: Map<string, SwaggerV2.IOperation.IGeneralParameter> = new Map();
    const emplace = (
      parameter: SwaggerV2.IOperation.IGeneralParameter,
    ): void => {
      map.set(`${parameter.in}:${parameter.name}`, parameter);
    };
    pathParameters.forEach(emplace);
    operationParameters.forEach(emplace);
    return [...map.values()];
  };

  const convertParameter =
    (definitions: Record<string, SwaggerV2.IJsonSchema>) =>
    (
      input: SwaggerV2.IOperation.IGeneralParameter,
    ): OpenApi.IOperation.IParameter => {
      if (isFileParameter(input))
        throw new TypeError(
          "SwaggerV2Upgrader: file parameters must be located in formData.",
        );
      const {
        name,
        in: location,
        required: inputRequired,
        description,
        ...schema
      } = input as SwaggerV2.IOperation.IGeneralParameter & {
        required?: boolean | string[];
      };
      const required: boolean | undefined =
        location === "path"
          ? true
          : typeof inputRequired === "boolean"
            ? inputRequired
            : undefined;
      return {
        name,
        in: location as any,
        description,
        schema: convertSchema(definitions)({
          ...schema,
          ...(Array.isArray(inputRequired)
            ? { required: inputRequired }
            : undefined),
        } as SwaggerV2.IJsonSchema),
        ...(required !== undefined ? { required } : {}),
      };
    };

  const convertFormData =
    (
      definitions: Record<string, SwaggerV2.IJsonSchema>,
      mediaTypes: string[],
    ) =>
    (
      parameters: SwaggerV2.IOperation.IGeneralParameter[],
    ): OpenApi.IOperation.IRequestBody => {
      if (
        mediaTypes.length === 0 ||
        mediaTypes.some((type) => isFormMediaType(type) === false)
      )
        throw new TypeError(
          "SwaggerV2Upgrader: formData parameters require only form media types.",
        );
      if (
        parameters.some(isFileParameter) &&
        mediaTypes.some((type) => type !== "multipart/form-data")
      )
        throw new TypeError(
          "SwaggerV2Upgrader: file parameters require multipart/form-data.",
        );
      const schema: OpenApi.IJsonSchema.IObject = {
        type: "object",
        properties: Object.fromEntries(
          parameters.map((parameter) => [
            parameter.name,
            convertFormDataSchema(definitions)(parameter),
          ]),
        ),
        required: parameters
          .filter((parameter) => isRequiredParameter(parameter))
          .map((parameter) => parameter.name),
      };
      return {
        required: schema.required!.length > 0 ? true : undefined,
        content: Object.fromEntries(
          mediaTypes.map((type) => [type, { schema }]),
        ),
      };
    };

  const convertFormDataSchema =
    (definitions: Record<string, SwaggerV2.IJsonSchema>) =>
    (input: SwaggerV2.IOperation.IGeneralParameter): OpenApi.IJsonSchema => {
      const {
        name: _name,
        in: _in,
        required: _required,
        description,
        ...schema
      } = input as SwaggerV2.IOperation.IGeneralParameter & {
        required?: boolean | string[];
      };
      if ((schema as { type?: string }).type === "file")
        return {
          type: "string",
          format: "binary",
          description,
          ...Object.fromEntries(
            Object.entries(schema).filter(
              ([key, value]) => key.startsWith("x-") && value !== undefined,
            ),
          ),
        };
      const converted: OpenApi.IJsonSchema = convertSchema(definitions)({
        ...schema,
        description:
          (schema as { description?: string }).description ?? description,
      } as SwaggerV2.IJsonSchema);
      if (isFormDataSchema(converted) === false)
        throw new TypeError(
          "SwaggerV2Upgrader: formData parameters must use simple schemas.",
        );
      return converted;
    };
  const convertRequestBody =
    (
      definitions: Record<string, SwaggerV2.IJsonSchema>,
      mediaTypes: string[],
    ) =>
    (
      input: SwaggerV2.IOperation.IBodyParameter,
    ): OpenApi.IOperation.IRequestBody => {
      if (mediaTypes.length === 0)
        throw new TypeError(
          "SwaggerV2Upgrader: body parameters require a consumed media type.",
        );
      return {
        description: input.description,
        ...(input.required !== undefined ? { required: input.required } : {}),
        content: Object.fromEntries(
          mediaTypes.map((type) => [
            type,
            {
              schema: convertSchema(definitions)(input.schema),
            },
          ]),
        ),
      };
    };

  const convertResponse =
    (doc: SwaggerV2.IDocument, mediaTypes: string[]) =>
    (
      input:
        | SwaggerV2.IOperation.IResponse
        | SwaggerV2.IJsonSchema.IReference<`#/definitions/responses/${string}`>,
    ): OpenApi.IOperation.IResponse | undefined => {
      if ("$ref" in input) {
        const found: SwaggerV2.IOperation.IResponse | undefined =
          doc.responses?.[input.$ref.split("/").pop() ?? ""]!;
        if (found === undefined) return undefined;
        input = found;
      }
      const exampleTypes: string[] = Object.keys(input.examples ?? {});
      const hasPayload: boolean =
        input.schema !== undefined ||
        exampleTypes.length > 0 ||
        input.example !== undefined;
      if (hasPayload && mediaTypes.length === 0)
        throw new TypeError(
          "SwaggerV2Upgrader: response payloads require a produced media type.",
        );
      if (exampleTypes.some((type) => mediaTypes.includes(type) === false))
        throw new TypeError(
          "SwaggerV2Upgrader: response examples must match produced media types.",
        );
      return {
        description: input.description,
        content:
          input.schema !== undefined ||
          exampleTypes.length > 0 ||
          input.example !== undefined
            ? Object.fromEntries(
                mediaTypes.map((type) => [
                  type,
                  {
                    schema:
                      input.schema !== undefined
                        ? convertSchema(doc.definitions ?? {})(input.schema)
                        : undefined,
                    example: Object.hasOwn(input.examples ?? {}, type)
                      ? input.examples![type]
                      : input.example,
                  },
                ]),
              )
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
                        name: key,
                        in: "header",
                        schema: convertSchema(doc.definitions ?? {})(value),
                      },
                    ] as const,
                ),
            )
          : undefined,
      };
    };

  const selectMediaTypes = (
    operation: string[] | undefined,
    document: string[] | undefined,
  ): string[] => [
    ...new Set(
      operation !== undefined
        ? operation
        : document !== undefined
          ? document
          : ["application/json"],
    ),
  ];

  const convertServers = (
    input: Pick<SwaggerV2.IDocument, "host" | "basePath" | "schemes">,
  ): OpenApi.IServer[] | undefined => {
    if (/[?#]/.test(input.host ?? "") || /[?#]/.test(input.basePath ?? ""))
      throw new TypeError(
        "SwaggerV2Upgrader: host and basePath cannot contain a query or fragment.",
      );
    const basePath: string = normalizeBasePath(input.basePath);
    if (!input.host) {
      if (input.schemes?.length)
        throw new TypeError(
          "SwaggerV2Upgrader: schemes require host to compose server URLs.",
        );
      return basePath ? [{ url: basePath }] : undefined;
    }

    const absolute: RegExpMatchArray | null = input.host.match(
      /^([A-Za-z][A-Za-z0-9+.-]*):\/\/([^/?#]+)(\/[^?#]*)?$/,
    );
    const embeddedScheme: string | undefined = absolute?.[1]?.toLowerCase();
    const host: string = absolute?.[2] ?? input.host.replace(/^\/\//, "");
    if (host.includes("@"))
      throw new TypeError(
        "SwaggerV2Upgrader: host cannot contain user information.",
      );
    const hostPath: string = normalizeBasePath(absolute?.[3]);
    const path: string = joinBasePaths(hostPath, basePath);
    const schemes: string[] = [
      ...new Set(
        input.schemes?.length
          ? input.schemes
          : embeddedScheme
            ? [embeddedScheme]
            : [],
      ),
    ];
    if (schemes.some((scheme) => isSwaggerScheme(scheme) === false))
      throw new TypeError(
        "SwaggerV2Upgrader: schemes must be http, https, ws, or wss.",
      );
    return schemes.length
      ? (schemes as SwaggerV2.Scheme[]).map((scheme) => ({
          url: `${scheme}://${host}${path}`,
        }))
      : [{ url: `//${host}${path}` }];
  };

  const normalizeBasePath = (path: string | undefined): string => {
    if (!path || path === "/") return path ?? "";
    const prefixed: string = path.startsWith("/") ? path : `/${path}`;
    return prefixed.replace(/\/+$/, "");
  };

  const joinBasePaths = (x: string, y: string): string =>
    x.length === 0 && y.length === 0
      ? ""
      : normalizeBasePath(`${x}/${y}`.replace(/\/+/g, "/"));

  const isFormMediaType = (type: string): boolean =>
    type === "application/x-www-form-urlencoded" ||
    type === "multipart/form-data";

  const isFormDataSchema = (input: OpenApi.IJsonSchema): boolean => {
    if (isFormDataScalarSchema(input)) return true;
    if (OpenApiTypeChecker.isArray(input) === false) return false;
    return isFormDataScalarSchema(input.items);
  };

  const isFormDataScalarSchema = (input: OpenApi.IJsonSchema): boolean => {
    if (
      OpenApiTypeChecker.isBoolean(input) ||
      OpenApiTypeChecker.isInteger(input) ||
      OpenApiTypeChecker.isNumber(input)
    )
      return true;
    if (OpenApiTypeChecker.isString(input)) return input.format !== "binary";
    if (OpenApiTypeChecker.isConstant(input)) return true;
    if (OpenApiTypeChecker.isOneOf(input) === false) return false;
    const nonNull: OpenApi.IJsonSchema[] = input.oneOf.filter(
      (schema) => OpenApiTypeChecker.isNull(schema) === false,
    );
    const nullCount: number = input.oneOf.length - nonNull.length;
    if (nullCount > 1 || nonNull.length === 0) return false;
    if (nonNull.every(OpenApiTypeChecker.isConstant))
      return (
        new Set(
          nonNull.map(
            (schema) => typeof (schema as OpenApi.IJsonSchema.IConstant).const,
          ),
        ).size === 1
      );
    return (
      nullCount === 1 &&
      nonNull.length === 1 &&
      (OpenApiTypeChecker.isBoolean(nonNull[0]!) ||
        OpenApiTypeChecker.isInteger(nonNull[0]!) ||
        OpenApiTypeChecker.isNumber(nonNull[0]!) ||
        (OpenApiTypeChecker.isString(nonNull[0]!) &&
          nonNull[0].format !== "binary"))
    );
  };

  const isSwaggerScheme = (input: string): input is SwaggerV2.Scheme =>
    input === "http" || input === "https" || input === "ws" || input === "wss";

  const isFileParameter = (
    input: SwaggerV2.IOperation.IGeneralParameter,
  ): input is SwaggerV2.IOperation.IGeneralParameter.IFile & {
    name: string;
    in: string;
    description?: string;
  } => (input as { type?: string }).type === "file";

  const isRequiredParameter = (
    input: SwaggerV2.IOperation.IGeneralParameter,
  ): boolean => (input as { required?: boolean }).required === true;

  /* -----------------------------------------------------------
    DEFINITIONS
  ----------------------------------------------------------- */
  export const convertComponents = (
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
      const getAttribute = (
        schema: SwaggerV2.IJsonSchema,
      ): IJsonSchemaAttribute =>
        Object.fromEntries(
          Object.entries({
            title: schema.title,
            description: schema.description,
            deprecated: schema.deprecated,
            readOnly: schema.readOnly,
            example: schema.example,
            examples: schema.examples
              ? Object.fromEntries(schema.examples.map((v, i) => [`v${i}`, v]))
              : undefined,
            ...Object.fromEntries(
              Object.entries(schema).filter(
                ([key, value]) =>
                  key.startsWith("x-") &&
                  key !== "x-anyOf" &&
                  key !== "x-oneOf" &&
                  key !== "x-nullable" &&
                  value !== undefined,
              ),
            ),
          }).filter(([_, value]) => value !== undefined),
        ) as IJsonSchemaAttribute;
      const attribute: IJsonSchemaAttribute = getAttribute(input);
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
        if (SwaggerV2TypeChecker.isAnyOf(schema))
          schema["x-anyOf"].forEach(visit);
        else if (SwaggerV2TypeChecker.isOneOf(schema))
          schema["x-oneOf"].forEach(visit);
        else if (SwaggerV2TypeChecker.isAllOf(schema))
          if (schema.allOf.length === 1) visit(schema.allOf[0]!);
          else union.push(convertAllOfSchema(definitions)(schema));
        // ATOMIC TYPE CASE (CONSIDER ENUM VALUES)
        else if (
          SwaggerV2TypeChecker.isBoolean(schema) ||
          SwaggerV2TypeChecker.isInteger(schema) ||
          SwaggerV2TypeChecker.isNumber(schema) ||
          SwaggerV2TypeChecker.isString(schema)
        )
          if (schema.enum?.length)
            union.push(
              ...schema.enum
                .filter((v) => v !== null)
                .map((value) => ({
                  const: value,
                  ...(schema === input ? {} : getAttribute(schema)),
                })),
            );
          else if (
            SwaggerV2TypeChecker.isInteger(schema) ||
            SwaggerV2TypeChecker.isNumber(schema)
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
        else if (SwaggerV2TypeChecker.isArray(schema))
          union.push({
            ...schema,
            items: convertSchema(definitions)(schema.items),
            examples: schema.examples
              ? Object.fromEntries(schema.examples.map((v, i) => [`v${i}`, v]))
              : undefined,
          });
        else if (SwaggerV2TypeChecker.isObject(schema)) {
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
                        convertSchema(definitions)(value),
                      ]),
                  ),
            additionalProperties:
              schema.additionalProperties === undefined
                ? undefined
                : typeof schema.additionalProperties === "object" &&
                    schema.additionalProperties !== null
                  ? convertSchema(definitions)(schema.additionalProperties)
                  : schema.additionalProperties,
            examples:
              schema.examples === undefined
                ? undefined
                : Object.fromEntries(
                    schema.examples.map((v, i) => [`v${i}`, v]),
                  ),
            required: schema.required,
          });
        } else if (SwaggerV2TypeChecker.isReference(schema))
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
        SwaggerV2TypeChecker.isAnyOf(input) === false &&
        SwaggerV2TypeChecker.isOneOf(input) === false &&
        union.filter((x) => OpenApiTypeChecker.isNull(x)).length === 1
      ) {
        const type: OpenApi.IJsonSchema = union.filter(
          (x) => OpenApiTypeChecker.isNull(x) === false,
        )[0]!;
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
        type: "object" as const,
        properties: Object.fromEntries(
          objects
            .map((o) => Object.entries(o?.properties ?? {}))
            .flat()
            .map(
              ([key, value]) =>
                [key, convertSchema(definitions)(value)] as const,
            ),
        ),
        additionalProperties: objects.every(
          (o) => o?.additionalProperties === false,
        )
          ? false
          : undefined,
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
      if (SwaggerV2TypeChecker.isObject(input))
        return input.properties !== undefined && !input.additionalProperties
          ? input
          : null;
      else if (visited.has(input)) return null;
      else visited.add(input);

      if (SwaggerV2TypeChecker.isReference(input))
        return retrieveObject(definitions)(
          definitions?.[input.$ref.split("/").pop() ?? ""] ?? {},
          visited,
        );
      return null;
    };
}
