import { TestValidator } from "@nestia/e2e";
import { IHttpMigrateApplication, OpenApi, SwaggerV2 } from "@typia/interface";
import {
  HttpMigration,
  OpenApiConverter,
  OpenApiTypeChecker,
} from "@typia/utils";

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
    "x-upload-kind": "attachment",
  } as unknown as SwaggerV2.IOperation.IGeneralParameter;
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
          parameters: [
            file,
            {
              name: "label",
              in: "formData",
              type: "string",
              "x-nullable": true,
            },
            {
              name: "aliases",
              in: "formData",
              type: "array",
              items: { type: "string", "x-nullable": true },
            },
            {
              name: "status",
              in: "formData",
              type: "string",
              enum: ["draft", "published"],
            },
            {
              name: "priorities",
              in: "formData",
              type: "array",
              items: { type: "integer", enum: [1, 2] },
            },
            {
              name: "mode",
              in: "formData",
              "x-oneOf": [
                { type: "string", enum: ["fast"], description: "Fast" },
                { type: "string", enum: ["safe"], description: "Safe" },
              ],
            },
          ],
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
    {
      type: "string",
      format: "binary",
      "x-upload-kind": "attachment",
    } as unknown as OpenApi.IJsonSchema,
  );
  TestValidator.predicate(
    "multipart file vendor extension",
    (
      (
        multipart.content!["multipart/form-data"]!
          .schema as OpenApi.IJsonSchema.IObject
      ).properties!.file as unknown as Record<string, unknown>
    )["x-upload-kind"] === "attachment",
  );
  const multipartProperties: Record<string, OpenApi.IJsonSchema> = (
    multipart.content!["multipart/form-data"]!
      .schema as OpenApi.IJsonSchema.IObject
  ).properties!;
  TestValidator.predicate(
    "nullable scalar form field",
    OpenApiTypeChecker.isOneOf(multipartProperties.label!) &&
      multipartProperties.label.oneOf.some(OpenApiTypeChecker.isNull),
  );
  TestValidator.predicate(
    "nullable array item form field",
    OpenApiTypeChecker.isArray(multipartProperties.aliases!) &&
      OpenApiTypeChecker.isOneOf(multipartProperties.aliases.items) &&
      multipartProperties.aliases.items.oneOf.some(OpenApiTypeChecker.isNull),
  );
  TestValidator.predicate(
    "scalar enum form field",
    OpenApiTypeChecker.isOneOf(multipartProperties.status!) &&
      multipartProperties.status.oneOf.every(OpenApiTypeChecker.isConstant),
  );
  TestValidator.predicate(
    "array item enum form field",
    OpenApiTypeChecker.isArray(multipartProperties.priorities!) &&
      OpenApiTypeChecker.isOneOf(multipartProperties.priorities.items) &&
      multipartProperties.priorities.items.oneOf.every(
        OpenApiTypeChecker.isConstant,
      ),
  );
  TestValidator.predicate(
    "attributed scalar enum form field",
    OpenApiTypeChecker.isOneOf(multipartProperties.mode!) &&
      multipartProperties.mode.oneOf.every(
        (schema, index) =>
          OpenApiTypeChecker.isConstant(schema) &&
          schema.description === (index === 0 ? "Fast" : "Safe"),
      ),
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
      uploadKind:
        "x-upload-kind" in parameter ? parameter["x-upload-kind"] : undefined,
    })),
    [
      {
        name: "file",
        in: "formData",
        type: "file",
        uploadKind: "attachment",
      },
      {
        name: "label",
        in: "formData",
        type: "string",
        uploadKind: undefined,
      },
      {
        name: "aliases",
        in: "formData",
        type: "array",
        uploadKind: undefined,
      },
      {
        name: "status",
        in: "formData",
        type: "string",
        uploadKind: undefined,
      },
      {
        name: "priorities",
        in: "formData",
        type: "array",
        uploadKind: undefined,
      },
      {
        name: "mode",
        in: "formData",
        type: undefined,
        uploadKind: undefined,
      },
    ],
  );
  TestValidator.predicate(
    "downgraded file vendor extension",
    downgraded.paths!["/multipart"]!.post!.parameters!.some(
      (parameter) =>
        "name" in parameter &&
        parameter.name === "file" &&
        (parameter as unknown as Record<string, unknown>)["x-upload-kind"] ===
          "attachment",
    ),
  );
  TestValidator.predicate(
    "downgraded nullable form fields",
    downgraded.paths!["/multipart"]!.post!.parameters!.every((parameter) => {
      if (!("name" in parameter)) return true;
      if (parameter.name === "label")
        return (parameter as { "x-nullable"?: boolean })["x-nullable"] === true;
      if (parameter.name === "aliases" && "items" in parameter)
        return (
          (
            parameter.items as SwaggerV2.IJsonSchema & {
              "x-nullable"?: boolean;
            }
          )["x-nullable"] === true
        );
      return true;
    }),
  );
  const downgradedMultipartParameters =
    downgraded.paths!["/multipart"]!.post!.parameters!;
  TestValidator.equals(
    "downgraded scalar form enum values",
    (
      downgradedMultipartParameters.find(
        (parameter) => "name" in parameter && parameter.name === "status",
      ) as SwaggerV2.IOperation.IGeneralParameter & { enum?: unknown[] }
    ).enum,
    ["draft", "published"],
  );
  const downgradedPriorities = downgradedMultipartParameters.find(
    (parameter) => "name" in parameter && parameter.name === "priorities",
  );
  TestValidator.equals(
    "downgraded array item form enum values",
    downgradedPriorities && "items" in downgradedPriorities
      ? (downgradedPriorities.items as { enum?: unknown[] }).enum
      : undefined,
    [1, 2],
  );
  const downgradedMode = downgradedMultipartParameters.find(
    (parameter) => "name" in parameter && parameter.name === "mode",
  );
  TestValidator.predicate(
    "downgraded attributed scalar enum branches",
    downgradedMode !== undefined &&
      "x-oneOf" in downgradedMode &&
      downgradedMode["x-oneOf"].every(
        (schema, index) =>
          schema.description === (index === 0 ? "Fast" : "Safe"),
      ),
  );

  const referencedForm: SwaggerV2.IDocument =
    OpenApiConverter.downgradeDocument(
      {
        openapi: "3.2.0",
        components: { schemas: { Text: { type: "string" } } },
        paths: {
          "/referenced": {
            post: {
              requestBody: {
                content: {
                  "multipart/form-data": {
                    schema: {
                      type: "object",
                      properties: {
                        text: {
                          $ref: "#/components/schemas/Text",
                          description: "Field-specific",
                        },
                      },
                    },
                  },
                },
              },
              responses: {},
            },
          },
        },
        "x-typia-emended-v12": true,
      },
      "2.0",
    );
  const referencedParameter =
    referencedForm.paths!["/referenced"]!.post!.parameters![0]!;
  TestValidator.predicate(
    "referenced form field description",
    "description" in referencedParameter &&
      referencedParameter.description === "Field-specific",
  );
  const referencedRoundTrip = OpenApiConverter.upgradeDocument(referencedForm);
  const referencedProperty = (
    referencedRoundTrip.paths!["/referenced"]!.post!.requestBody!.content![
      "multipart/form-data"
    ]!.schema as OpenApi.IJsonSchema.IObject
  ).properties!.text!;
  TestValidator.predicate(
    "referenced form field description round trip",
    referencedProperty.description === "Field-specific",
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
  assertThrows("binary array formData field", () =>
    OpenApiConverter.upgradeDocument({
      ...input,
      paths: {
        "/invalid": {
          post: {
            consumes: ["multipart/form-data"],
            parameters: [
              {
                name: "files",
                in: "formData",
                type: "array",
                items: { type: "string", format: "binary" },
              },
            ],
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
