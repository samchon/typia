import { TestValidator } from "@nestia/e2e";
import { IHttpMigrateApplication, OpenApi, SwaggerV2 } from "@typia/interface";
import { HttpMigration, OpenApiConverter } from "@typia/utils";

/**
 * Verifies Swagger 2 form-data payloads survive conversion and migration.
 *
 * Swagger models form fields as parameters, while emended OpenAPI and the HTTP
 * migration layer consume one object-shaped request body. Leaving `formData`
 * parameters in the ordinary parameter list silently removes the payload.
 *
 * 1. Upgrade URL-encoded and multipart form operations, including a file field.
 * 2. Assert the emended request bodies and migrated route body types are usable.
 * 3. Downgrade again and assert the original form parameter locations return.
 */
export const test_document_roundtrip_v20_form_data = (): void => {
  const file = {
    name: "file",
    in: "formData",
    required: true,
    type: "file",
  } satisfies SwaggerV2.IOperation.IGeneralParameter;
  const input: SwaggerV2.IDocument = {
    swagger: "2.0",
    info: { title: "Form API", version: "1.0.0" },
    consumes: ["application/x-www-form-urlencoded"],
    paths: {
      "/urlencoded": {
        post: {
          parameters: [
            {
              name: "name",
              in: "formData",
              required: true,
              type: "string",
            },
            {
              name: "tags",
              in: "formData",
              type: "array",
              items: { type: "string" },
            },
          ],
          responses: { "204": { description: "updated" } },
        },
      },
      "/multipart": {
        post: {
          consumes: ["multipart/form-data"],
          parameters: [file, { name: "label", in: "formData", type: "string" }],
          responses: { "204": { description: "uploaded" } },
        },
      },
    },
  };

  const upgraded: OpenApi.IDocument = OpenApiConverter.upgradeDocument(input);
  const urlencoded: OpenApi.IOperation.IRequestBody =
    upgraded.paths!["/urlencoded"]!.post!.requestBody!;
  const multipart: OpenApi.IOperation.IRequestBody =
    upgraded.paths!["/multipart"]!.post!.requestBody!;
  TestValidator.equals("urlencoded content", Object.keys(urlencoded.content!), [
    "application/x-www-form-urlencoded",
  ]);
  TestValidator.equals(
    "urlencoded schema",
    urlencoded.content!["application/x-www-form-urlencoded"]!.schema,
    {
      type: "object",
      properties: {
        name: { type: "string" },
        tags: { type: "array", items: { type: "string" } },
      },
      required: ["name"],
    },
  );
  TestValidator.equals(
    "multipart file",
    (
      multipart.content!["multipart/form-data"]!
        .schema as OpenApi.IJsonSchema.IObject
    ).properties!.file,
    { type: "string", format: "binary" },
  );

  const migration: IHttpMigrateApplication =
    HttpMigration.application(upgraded);
  TestValidator.equals("migration errors", migration.errors, []);
  TestValidator.equals(
    "migration body types",
    migration.routes.map((route) => route.body?.type),
    ["application/x-www-form-urlencoded", "multipart/form-data"],
  );

  const downgraded: SwaggerV2.IDocument = OpenApiConverter.downgradeDocument(
    upgraded,
    "2.0",
  );
  TestValidator.equals(
    "urlencoded form parameters",
    downgraded.paths!["/urlencoded"]!.post!.parameters!.map((parameter) => ({
      name: "name" in parameter ? parameter.name : undefined,
      in: "in" in parameter ? parameter.in : undefined,
      type: "type" in parameter ? parameter.type : undefined,
      required: "required" in parameter ? parameter.required : undefined,
    })),
    [
      { name: "name", in: "formData", type: "string", required: true },
      {
        name: "tags",
        in: "formData",
        type: "array",
        required: undefined,
      },
    ],
  );
  TestValidator.equals(
    "multipart form parameters",
    downgraded.paths!["/multipart"]!.post!.parameters!.map((parameter) => ({
      name: "name" in parameter ? parameter.name : undefined,
      in: "in" in parameter ? parameter.in : undefined,
      type: "type" in parameter ? parameter.type : undefined,
    })),
    [
      { name: "file", in: "formData", type: "file" },
      { name: "label", in: "formData", type: "string" },
    ],
  );

  assertThrows("body and formData", () =>
    OpenApiConverter.upgradeDocument({
      ...input,
      paths: {
        "/invalid": {
          post: {
            parameters: [
              { name: "body", in: "body", schema: { type: "string" } },
              { name: "field", in: "formData", type: "string" },
            ],
            responses: {},
          },
        },
      },
    }),
  );
  assertThrows("complex formData field", () =>
    OpenApiConverter.upgradeDocument({
      ...input,
      paths: {
        "/invalid": {
          post: {
            parameters: [
              {
                name: "nested",
                in: "formData",
                type: "object",
                properties: { value: { type: "string" } },
              },
            ],
            responses: {},
          },
        },
      },
    }),
  );
  assertThrows("urlencoded file", () =>
    OpenApiConverter.upgradeDocument({
      ...input,
      paths: {
        "/invalid": {
          post: {
            parameters: [file],
            responses: {},
          },
        },
      },
    }),
  );
};

const assertThrows = (title: string, task: () => unknown): void => {
  let thrown: boolean = false;
  try {
    task();
  } catch {
    thrown = true;
  }
  TestValidator.predicate(title, thrown);
};
