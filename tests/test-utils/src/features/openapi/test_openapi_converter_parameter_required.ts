import { TestValidator } from "@nestia/e2e";
import { OpenApi, SwaggerV2 } from "@typia/interface";
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
 *    path-level and `$ref` body parameters.
 * 3. Assert omitted optional values, explicit `false`, and required `true` are
 *    preserved.
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
      "/body/ref-operation": {
        post: {
          parameters: [
            {
              $ref: "#/parameters/SharedBody",
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
    },
  } satisfies SwaggerV2.IDocument);
  const upgraded = openapi.paths!["/items/{id}"]!.get!.parameters!;
  const upgradedKeyword = upgraded.find((p) => p.name === "keyword")!;
  const upgradedFilter = upgraded.find((p) => p.name === "filter")!;
  const upgradedId = upgraded.find((p) => p.name === "id")!;
  const upgradedBodyOmitted =
    openapi.paths!["/body/omitted"]!.post!.requestBody!;
  const upgradedBodyFalse = openapi.paths!["/body/false"]!.post!.requestBody!;
  const upgradedBodyTrue = openapi.paths!["/body/true"]!.post!.requestBody!;
  const upgradedPathLevelBody =
    openapi.paths!["/body/path-level"]!.post!.requestBody!;
  const upgradedOperationRefBody =
    openapi.paths!["/body/ref-operation"]!.post!.requestBody!;
  const upgradedPathRefBody =
    openapi.paths!["/body/ref-path"]!.post!.requestBody!;

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
  assertSchemaMetadataOmitted("upgraded keyword schema", upgradedKeyword);
  assertSchemaMetadataOmitted("upgraded filter schema", upgradedFilter);
  assertSchemaMetadataOmitted("upgraded path schema", upgradedId);
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
