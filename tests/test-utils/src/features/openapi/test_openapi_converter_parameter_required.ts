import { TestValidator } from "@nestia/e2e";
import { OpenApi, SwaggerV2 } from "@typia/interface";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies Swagger parameter conversions preserve parameter `required`.
 *
 * Swagger v2 and OpenAPI general parameters store `required` as a
 * parameter-level boolean, not as a schema-object `required` array. Converters
 * must preserve omitted optional parameters, explicit `false`, and path `true`
 * across both directions.
 *
 * 1. Downgrade an emended OpenAPI document with omitted, false, and true
 *    parameter-level `required` values.
 * 2. Upgrade a Swagger v2 document with the same parameter-level cases.
 * 3. Assert omitted optional parameters, explicit `false`, and path `true` are
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
            ],
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

  const openapi: OpenApi.IDocument = OpenApiConverter.upgradeDocument({
    swagger: "2.0",
    info: { title: "test", version: "1.0.0" },
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
    },
  } satisfies SwaggerV2.IDocument);
  const upgraded = openapi.paths!["/items/{id}"]!.get!.parameters!;
  const upgradedKeyword = upgraded.find((p) => p.name === "keyword")!;
  const upgradedFilter = upgraded.find((p) => p.name === "filter")!;
  const upgradedId = upgraded.find((p) => p.name === "id")!;

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
    },
    {
      own: true,
      value: false,
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
};
