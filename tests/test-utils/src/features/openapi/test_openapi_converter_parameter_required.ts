import { TestValidator } from "@nestia/e2e";
import { OpenApi, SwaggerV2 } from "@typia/interface";
import { OpenApiConverter } from "@typia/utils";

/**
 * Verifies Swagger parameter downgrades preserve parameter `required`.
 *
 * Swagger v2 general parameters store `required` as a parameter-level boolean,
 * not as a schema-object `required` array. The downgrade path must not read the
 * boolean from `schema.required`, because doing so drops required path
 * parameters and serializes optional parameters as own `required: undefined`.
 *
 * 1. Downgrade an emended OpenAPI document with omitted, false, and true
 *    parameter-level `required` values.
 * 2. Assert omitted optional parameters do not gain an own `required` key.
 * 3. Assert explicit `false` and path `true` are preserved.
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
};
