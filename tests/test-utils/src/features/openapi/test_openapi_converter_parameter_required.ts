import { TestValidator } from "@nestia/e2e";
import {
  OpenApi,
  OpenApiV3,
  OpenApiV3_1,
  OpenApiV3_2,
  SwaggerV2,
} from "@typia/interface";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies Swagger parameter conversions preserve parameter `required`.
 *
 * Swagger v2 and OpenAPI parameters/request bodies store `required` as an
 * operation-level boolean, not as a schema-object `required` array. Converters
 * must preserve omitted optional values, explicit `false`, and path/body `true`
 * across both directions without leaking parameter metadata into the nested
 * schema.
 *
 * 1. Downgrade an emended OpenAPI document with omitted, false, and true
 *    parameter-level and request-body `required` values.
 * 2. Upgrade a Swagger v2 document with the same parameter/body cases, including
 *    schema-array `required`, path normalization, and mixed `$ref` bodies.
 * 3. Upgrade OpenAPI v3.0, v3.1, and v3.2 documents with path-level parameters
 *    overridden at the operation level.
 * 4. Assert omitted optional values, explicit `false`, required `true`, and
 *    parameter override semantics are preserved.
 */
export const test_openapi_converter_parameter_required = (): void => {
  const swagger: SwaggerV2.IDocument = OpenApiConverter.downgradeDocument(
    {
      openapi: "3.2.0",
      "x-typia-emended-v12": true,
      info: { title: "test", version: "1.0.0" },
      components: {},
      paths: {
        "/items/{id}": {
          get: {
            parameters: [
              {
                name: "keyword",
                in: "query",
                schema: { type: "string" },
              },
              {
                name: "filter",
                in: "query",
                required: false,
                schema: { type: "string" },
              },
              {
                name: "id",
                in: "path",
                required: true,
                schema: { type: "string" },
              },
              {
                name: "object",
                in: "query",
                schema: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                  },
                  required: ["name"],
                },
              },
              {
                name: "objectFalse",
                in: "query",
                required: false,
                schema: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                  },
                  required: ["name"],
                },
              },
            ],
            responses: {
              "200": {
                description: "OK",
              },
            },
          },
        },
        "/body/omitted": {
          post: {
            requestBody: {
              content: {
                "application/json": {
                  schema: { type: "string" },
                },
              },
            },
            responses: {
              "200": {
                description: "OK",
              },
            },
          },
        },
        "/body/false": {
          post: {
            requestBody: {
              required: false,
              content: {
                "application/json": {
                  schema: { type: "string" },
                },
              },
            },
            responses: {
              "200": {
                description: "OK",
              },
            },
          },
        },
        "/body/true": {
          post: {
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: { type: "string" },
                },
              },
            },
            responses: {
              "200": {
                description: "OK",
              },
            },
          },
        },
      },
    } satisfies OpenApi.IDocument,
    "2.0",
  );
  type Parameter = SwaggerV2.IOperation.IParameter & {
    required?: boolean;
  };
  const parameters = swagger.paths!["/items/{id}"]!.get!
    .parameters! as Parameter[];
  const keyword = parameters.find((p) => p.name === "keyword")!;
  const filter = parameters.find((p) => p.name === "filter")!;
  const id = parameters.find((p) => p.name === "id")!;
  const object = parameters.find((p) => p.name === "object")!;
  const objectFalse = parameters.find((p) => p.name === "objectFalse")!;
  const bodyOmitted = swagger.paths!["/body/omitted"]!.post!
    .parameters![0]! as Parameter;
  const bodyFalse = swagger.paths!["/body/false"]!.post!
    .parameters![0]! as Parameter;
  const bodyTrue = swagger.paths!["/body/true"]!.post!
    .parameters![0]! as Parameter;

  TestValidator.equals(
    "omitted optional required",
    Object.prototype.hasOwnProperty.call(keyword, "required"),
    false,
  );
  TestValidator.equals(
    "explicit false required",
    {
      own: Object.prototype.hasOwnProperty.call(filter, "required"),
      value: filter.required,
    },
    {
      own: true,
      value: false,
    },
  );
  TestValidator.equals(
    "path required",
    {
      own: Object.prototype.hasOwnProperty.call(id, "required"),
      value: id.required,
    },
    {
      own: true,
      value: true,
    },
  );
  TestValidator.equals(
    "object schema required omitted from parameter",
    Object.prototype.hasOwnProperty.call(object, "required"),
    false,
  );
  TestValidator.equals(
    "object schema explicit false required",
    {
      own: Object.prototype.hasOwnProperty.call(objectFalse, "required"),
      value: objectFalse.required,
    },
    {
      own: true,
      value: false,
    },
  );
  TestValidator.equals(
    "omitted request body required",
    Object.prototype.hasOwnProperty.call(bodyOmitted, "required"),
    false,
  );
  TestValidator.equals(
    "explicit false request body required",
    {
      own: Object.prototype.hasOwnProperty.call(bodyFalse, "required"),
      value: bodyFalse.required,
    },
    {
      own: true,
      value: false,
    },
  );
  TestValidator.equals(
    "explicit true request body required",
    {
      own: Object.prototype.hasOwnProperty.call(bodyTrue, "required"),
      value: bodyTrue.required,
    },
    {
      own: true,
      value: true,
    },
  );

  const openapi: OpenApi.IDocument = OpenApiConverter.upgradeDocument({
    swagger: "2.0",
    info: { title: "test", version: "1.0.0" },
    parameters: {
      SharedBody: {
        name: "body",
        in: "body",
        required: true,
        schema: { type: "string" },
      },
      SharedPathBase: {
        name: "id",
        in: "path",
        type: "string",
      },
      SharedPathOverride: {
        name: "id",
        in: "path",
        required: false,
        type: "integer",
      } as SwaggerV2.IOperation.IGeneralParameter & {
        required: false;
      },
      SharedQueryBase: {
        name: "keyword",
        in: "query",
        required: false,
        type: "string",
      } as SwaggerV2.IOperation.IGeneralParameter & {
        required: false;
      },
      SharedQueryOverride: {
        name: "keyword",
        in: "query",
        required: true,
        type: "number",
      } as SwaggerV2.IOperation.IGeneralParameter & {
        required: true;
      },
    },
    paths: {
      "/items/{id}": {
        get: {
          parameters: [
            {
              name: "keyword",
              in: "query",
              type: "string",
            },
            {
              name: "filter",
              in: "query",
              description: "Optional filter.",
              required: false,
              type: "string",
            } as SwaggerV2.IOperation.IGeneralParameter & {
              required: false;
            },
            {
              name: "id",
              in: "path",
              required: true,
              type: "string",
            } as SwaggerV2.IOperation.IGeneralParameter & {
              required: true;
            },
            {
              name: "objectEmpty",
              in: "query",
              type: "object",
              properties: {
                name: { type: "string" },
              },
              required: [],
            },
            {
              name: "objectNamed",
              in: "query",
              type: "object",
              properties: {
                name: { type: "string" },
              },
              required: ["name"],
            },
          ],
          responses: {
            "200": {
              description: "OK",
            },
          },
        },
      },
      "/path/{loose}/{falsePath}": {
        get: {
          parameters: [
            {
              name: "loose",
              in: "path",
              type: "string",
            },
            {
              name: "falsePath",
              in: "path",
              required: false,
              type: "string",
            } as SwaggerV2.IOperation.IGeneralParameter & {
              required: false;
            },
          ],
          responses: {
            "200": {
              description: "OK",
            },
          },
        },
      },
      "/parameters/override/{id}": {
        parameters: [
          {
            name: "keyword",
            in: "query",
            required: false,
            type: "string",
          } as SwaggerV2.IOperation.IGeneralParameter & {
            required: false;
          },
          {
            name: "id",
            in: "path",
            type: "string",
          },
        ],
        get: {
          parameters: [
            {
              name: "keyword",
              in: "query",
              required: true,
              type: "number",
            } as SwaggerV2.IOperation.IGeneralParameter & {
              required: true;
            },
            {
              name: "id",
              in: "path",
              required: false,
              type: "integer",
            } as SwaggerV2.IOperation.IGeneralParameter & {
              required: false;
            },
          ],
          responses: {
            "200": {
              description: "OK",
            },
          },
        },
      },
      "/parameters/ref-override/{id}": {
        parameters: [
          {
            $ref: "#/parameters/SharedQueryBase",
          },
          {
            $ref: "#/parameters/SharedPathBase",
          },
        ],
        get: {
          parameters: [
            {
              $ref: "#/definitions/parameters/SharedQueryOverride",
            },
            {
              $ref: "#/definitions/parameters/SharedPathOverride",
            },
          ],
          responses: {
            "200": {
              description: "OK",
            },
          },
        },
      },
      "/body/omitted": {
        post: {
          parameters: [
            {
              name: "body",
              in: "body",
              schema: { type: "string" },
            },
          ],
          responses: {
            "200": {
              description: "OK",
            },
          },
        },
      },
      "/body/false": {
        post: {
          parameters: [
            {
              name: "body",
              in: "body",
              required: false,
              schema: { type: "string" },
            },
          ],
          responses: {
            "200": {
              description: "OK",
            },
          },
        },
      },
      "/body/true": {
        post: {
          parameters: [
            {
              name: "body",
              in: "body",
              required: true,
              schema: { type: "string" },
            },
          ],
          responses: {
            "200": {
              description: "OK",
            },
          },
        },
      },
      "/body/path-level": {
        parameters: [
          {
            name: "body",
            in: "body",
            required: false,
            schema: { type: "string" },
          },
        ],
        post: {
          responses: {
            "200": {
              description: "OK",
            },
          },
        },
      },
      "/body/override": {
        parameters: [
          {
            name: "body",
            in: "body",
            required: false,
            schema: { type: "string" },
          },
        ],
        post: {
          parameters: [
            {
              name: "body",
              in: "body",
              required: true,
              schema: { type: "number" },
            },
          ],
          responses: {
            "200": {
              description: "OK",
            },
          },
        },
      },
      "/body/ref-operation": {
        post: {
          parameters: [
            {
              $ref: "#/definitions/parameters/SharedBody",
            },
          ],
          responses: {
            "200": {
              description: "OK",
            },
          },
        },
      },
      "/body/ref-path": {
        parameters: [
          {
            $ref: "#/parameters/SharedBody",
          },
        ],
        post: {
          responses: {
            "200": {
              description: "OK",
            },
          },
        },
      },
      "/body/ref-operation-override": {
        parameters: [
          {
            name: "body",
            in: "body",
            required: false,
            schema: { type: "number" },
          },
        ],
        post: {
          parameters: [
            {
              $ref: "#/definitions/parameters/SharedBody",
            },
          ],
          responses: {
            "200": {
              description: "OK",
            },
          },
        },
      },
      "/body/literal-operation-override": {
        parameters: [
          {
            $ref: "#/parameters/SharedBody",
          },
        ],
        post: {
          parameters: [
            {
              name: "body",
              in: "body",
              required: false,
              schema: { type: "number" },
            },
          ],
          responses: {
            "200": {
              description: "OK",
            },
          },
        },
      },
    },
  } satisfies SwaggerV2.IDocument);
  const upgraded = openapi.paths!["/items/{id}"]!.get!.parameters!;
  const upgradedKeyword = upgraded.find((p) => p.name === "keyword")!;
  const upgradedFilter = upgraded.find((p) => p.name === "filter")!;
  const upgradedId = upgraded.find((p) => p.name === "id")!;
  const upgradedObjectEmpty = upgraded.find((p) => p.name === "objectEmpty")!;
  const upgradedObjectNamed = upgraded.find((p) => p.name === "objectNamed")!;
  const upgradedPathParameters =
    openapi.paths!["/path/{loose}/{falsePath}"]!.get!.parameters!;
  const upgradedLoosePath = upgradedPathParameters.find(
    (p) => p.name === "loose",
  )!;
  const upgradedFalsePath = upgradedPathParameters.find(
    (p) => p.name === "falsePath",
  )!;
  const upgradedOverrideParameters =
    openapi.paths!["/parameters/override/{id}"]!.get!.parameters!;
  const upgradedOverrideKeyword = upgradedOverrideParameters.find(
    (p) => p.name === "keyword",
  )!;
  const upgradedOverrideId = upgradedOverrideParameters.find(
    (p) => p.name === "id",
  )!;
  const upgradedRefOverrideParameters =
    openapi.paths!["/parameters/ref-override/{id}"]!.get!.parameters!;
  const upgradedRefOverrideKeyword = upgradedRefOverrideParameters.find(
    (p) => p.name === "keyword",
  )!;
  const upgradedRefOverrideId = upgradedRefOverrideParameters.find(
    (p) => p.name === "id",
  )!;
  const upgradedBodyOmitted =
    openapi.paths!["/body/omitted"]!.post!.requestBody!;
  const upgradedBodyFalse = openapi.paths!["/body/false"]!.post!.requestBody!;
  const upgradedBodyTrue = openapi.paths!["/body/true"]!.post!.requestBody!;
  const upgradedPathLevelBody =
    openapi.paths!["/body/path-level"]!.post!.requestBody!;
  const upgradedOverrideBody =
    openapi.paths!["/body/override"]!.post!.requestBody!;
  const upgradedOperationRefBody =
    openapi.paths!["/body/ref-operation"]!.post!.requestBody!;
  const upgradedPathRefBody =
    openapi.paths!["/body/ref-path"]!.post!.requestBody!;
  const upgradedOperationRefOverrideBody =
    openapi.paths!["/body/ref-operation-override"]!.post!.requestBody!;
  const upgradedLiteralOperationOverrideBody =
    openapi.paths!["/body/literal-operation-override"]!.post!.requestBody!;

  TestValidator.equals(
    "upgraded omitted optional required",
    Object.prototype.hasOwnProperty.call(upgradedKeyword, "required"),
    false,
  );
  TestValidator.equals(
    "upgraded explicit false required",
    {
      own: Object.prototype.hasOwnProperty.call(upgradedFilter, "required"),
      value: upgradedFilter.required,
      description: upgradedFilter.description,
    },
    {
      own: true,
      value: false,
      description: "Optional filter.",
    },
  );
  TestValidator.equals(
    "upgraded path required",
    {
      own: Object.prototype.hasOwnProperty.call(upgradedId, "required"),
      value: upgradedId.required,
    },
    {
      own: true,
      value: true,
    },
  );
  TestValidator.equals(
    "upgraded omitted path required normalized",
    {
      own: Object.prototype.hasOwnProperty.call(upgradedLoosePath, "required"),
      value: upgradedLoosePath.required,
    },
    {
      own: true,
      value: true,
    },
  );
  TestValidator.equals(
    "upgraded false path required normalized",
    {
      own: Object.prototype.hasOwnProperty.call(upgradedFalsePath, "required"),
      value: upgradedFalsePath.required,
    },
    {
      own: true,
      value: true,
    },
  );
  assertOperationOverride("upgraded operation parameter overrides path", {
    parameters: upgradedOverrideParameters,
    keyword: upgradedOverrideKeyword,
    id: upgradedOverrideId,
  });
  assertOperationOverride("upgraded operation refs override path refs", {
    parameters: upgradedRefOverrideParameters,
    keyword: upgradedRefOverrideKeyword,
    id: upgradedRefOverrideId,
  });
  assertOpenApiV3OperationOverride(
    "v3.0 operation parameter overrides path",
    OpenApiConverter.upgradeDocument(openApiV3ParameterDocument()),
    "/openapi/direct/{id}",
  );
  assertOpenApiV3OperationOverride(
    "v3.0 operation refs override path refs",
    OpenApiConverter.upgradeDocument(openApiV3ParameterDocument()),
    "/openapi/ref/{id}",
  );
  assertOpenApiV3OperationOverride(
    "v3.1 operation parameter overrides path",
    OpenApiConverter.upgradeDocument(openApiV31ParameterDocument()),
    "/openapi/direct/{id}",
  );
  assertOpenApiV3OperationOverride(
    "v3.1 operation refs override path refs",
    OpenApiConverter.upgradeDocument(openApiV31ParameterDocument()),
    "/openapi/ref/{id}",
  );
  assertOpenApiV3OperationOverride(
    "v3.2 operation parameter overrides path",
    OpenApiConverter.upgradeDocument(openApiV32ParameterDocument()),
    "/openapi/direct/{id}",
  );
  assertOpenApiV3OperationOverride(
    "v3.2 operation refs override path refs",
    OpenApiConverter.upgradeDocument(openApiV32ParameterDocument()),
    "/openapi/ref/{id}",
  );
  assertSchemaMetadataOmitted("upgraded keyword schema", upgradedKeyword);
  assertSchemaMetadataOmitted("upgraded filter schema", upgradedFilter);
  assertSchemaMetadataOmitted("upgraded path schema", upgradedId);
  TestValidator.equals(
    "upgraded empty object schema required",
    {
      parameter: Object.prototype.hasOwnProperty.call(
        upgradedObjectEmpty,
        "required",
      ),
      schema: Object.prototype.hasOwnProperty.call(
        upgradedObjectEmpty.schema,
        "required",
      ),
    },
    {
      parameter: false,
      schema: false,
    },
  );
  TestValidator.equals(
    "upgraded named object schema required",
    {
      parameter: Object.prototype.hasOwnProperty.call(
        upgradedObjectNamed,
        "required",
      ),
      schema: (upgradedObjectNamed.schema as OpenApi.IJsonSchema.IObject)
        .required,
    },
    {
      parameter: false,
      schema: ["name"],
    },
  );
  TestValidator.equals(
    "upgraded omitted request body required",
    Object.prototype.hasOwnProperty.call(upgradedBodyOmitted, "required"),
    false,
  );
  TestValidator.equals(
    "upgraded explicit false request body required",
    {
      own: Object.prototype.hasOwnProperty.call(upgradedBodyFalse, "required"),
      value: upgradedBodyFalse.required,
    },
    {
      own: true,
      value: false,
    },
  );
  TestValidator.equals(
    "upgraded explicit true request body required",
    {
      own: Object.prototype.hasOwnProperty.call(upgradedBodyTrue, "required"),
      value: upgradedBodyTrue.required,
    },
    {
      own: true,
      value: true,
    },
  );
  TestValidator.equals(
    "upgraded path-level request body required",
    {
      own: Object.prototype.hasOwnProperty.call(
        upgradedPathLevelBody,
        "required",
      ),
      value: upgradedPathLevelBody.required,
    },
    {
      own: true,
      value: false,
    },
  );
  TestValidator.equals(
    "upgraded operation body overrides path body",
    {
      required: upgradedOverrideBody.required,
      schema: (
        upgradedOverrideBody.content!["application/json"]!
          .schema as OpenApi.IJsonSchema.INumber
      ).type,
    },
    {
      required: true,
      schema: "number",
    },
  );
  TestValidator.equals(
    "upgraded operation ref request body required",
    {
      own: Object.prototype.hasOwnProperty.call(
        upgradedOperationRefBody,
        "required",
      ),
      value: upgradedOperationRefBody.required,
    },
    {
      own: true,
      value: true,
    },
  );
  TestValidator.equals(
    "upgraded path ref request body required",
    {
      own: Object.prototype.hasOwnProperty.call(
        upgradedPathRefBody,
        "required",
      ),
      value: upgradedPathRefBody.required,
    },
    {
      own: true,
      value: true,
    },
  );
  TestValidator.equals(
    "upgraded operation ref body overrides path body",
    {
      required: upgradedOperationRefOverrideBody.required,
      schema: (
        upgradedOperationRefOverrideBody.content!["application/json"]!
          .schema as OpenApi.IJsonSchema.IString
      ).type,
    },
    {
      required: true,
      schema: "string",
    },
  );
  TestValidator.equals(
    "upgraded operation body overrides path ref body",
    {
      required: upgradedLiteralOperationOverrideBody.required,
      schema: (
        upgradedLiteralOperationOverrideBody.content!["application/json"]!
          .schema as OpenApi.IJsonSchema.INumber
      ).type,
    },
    {
      required: false,
      schema: "number",
    },
  );
};

const assertSchemaMetadataOmitted = (
  title: string,
  parameter: OpenApi.IOperation.IParameter,
): void =>
  TestValidator.equals(
    title,
    {
      name: Object.prototype.hasOwnProperty.call(parameter.schema, "name"),
      in: Object.prototype.hasOwnProperty.call(parameter.schema, "in"),
      required: Object.prototype.hasOwnProperty.call(
        parameter.schema,
        "required",
      ),
      description: (parameter.schema as { description?: unknown }).description,
    },
    {
      name: false,
      in: false,
      required: false,
      description: undefined,
    },
  );

const assertOpenApiV3OperationOverride = (
  title: string,
  document: OpenApi.IDocument,
  path: string,
): void => {
  const parameters = document.paths![path]!.get!.parameters!;
  const keyword = parameters.find(
    (p) => p.name === "keyword" && p.in === "query",
  )!;
  const id = parameters.find((p) => p.name === "id" && p.in === "path")!;
  assertOperationOverride(title, { parameters, keyword, id });
};

const assertOperationOverride = (
  title: string,
  props: {
    parameters: OpenApi.IOperation.IParameter[];
    keyword: OpenApi.IOperation.IParameter;
    id: OpenApi.IOperation.IParameter;
  },
): void =>
  TestValidator.equals(
    title,
    {
      count: props.parameters.length,
      keyword: {
        in: props.keyword.in,
        own: Object.prototype.hasOwnProperty.call(props.keyword, "required"),
        required: props.keyword.required,
        schema: (props.keyword.schema as OpenApi.IJsonSchema.INumber).type,
      },
      id: {
        in: props.id.in,
        own: Object.prototype.hasOwnProperty.call(props.id, "required"),
        required: props.id.required,
        schema: (props.id.schema as OpenApi.IJsonSchema.IInteger).type,
      },
    },
    {
      count: 2,
      keyword: {
        in: "query",
        own: true,
        required: true,
        schema: "number",
      },
      id: {
        in: "path",
        own: true,
        required: true,
        schema: "integer",
      },
    },
  );

const openApiV3ParameterDocument = (): OpenApiV3.IDocument =>
  ({
    openapi: "3.0.0",
    info: { title: "test", version: "1.0.0" },
    components: openApiParameterComponents(),
    paths: openApiParameterPaths(),
  }) as OpenApiV3.IDocument;

const openApiV31ParameterDocument = (): OpenApiV3_1.IDocument =>
  ({
    openapi: "3.1.0",
    info: { title: "test", version: "1.0.0" },
    components: openApiParameterComponents(),
    paths: openApiParameterPaths(),
  }) as OpenApiV3_1.IDocument;

const openApiV32ParameterDocument = (): OpenApiV3_2.IDocument =>
  ({
    openapi: "3.2.0",
    info: { title: "test", version: "1.0.0" },
    components: openApiParameterComponents(),
    paths: openApiParameterPaths(),
  }) as OpenApiV3_2.IDocument;

const openApiParameterComponents = () =>
  ({
    parameters: {
      SharedQueryBase: {
        name: "keyword",
        in: "query",
        required: false,
        schema: { type: "string" },
      },
      SharedQueryOverride: {
        name: "keyword",
        in: "query",
        required: true,
        schema: { type: "number" },
      },
      SharedPathBase: {
        name: "id",
        in: "path",
        schema: { type: "string" },
      },
      SharedPathOverride: {
        name: "id",
        in: "path",
        required: false,
        schema: { type: "integer" },
      },
    },
  }) as const;

const openApiParameterPaths = () =>
  ({
    "/openapi/direct/{id}": {
      parameters: [
        {
          name: "keyword",
          in: "query",
          required: false,
          schema: { type: "string" },
        },
        {
          name: "id",
          in: "path",
          schema: { type: "string" },
        },
      ],
      get: {
        parameters: [
          {
            name: "keyword",
            in: "query",
            required: true,
            schema: { type: "number" },
          },
          {
            name: "id",
            in: "path",
            required: false,
            schema: { type: "integer" },
          },
        ],
        responses: {
          "200": {
            description: "OK",
          },
        },
      },
    },
    "/openapi/ref/{id}": {
      parameters: [
        {
          $ref: "#/components/parameters/SharedQueryBase",
        },
        {
          $ref: "#/components/parameters/SharedPathBase",
        },
      ],
      get: {
        parameters: [
          {
            $ref: "#/components/parameters/SharedQueryOverride",
          },
          {
            $ref: "#/components/parameters/SharedPathOverride",
          },
        ],
        responses: {
          "200": {
            description: "OK",
          },
        },
      },
    },
  }) as const;
