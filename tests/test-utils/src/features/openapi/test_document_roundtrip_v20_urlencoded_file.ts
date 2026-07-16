import { TestValidator } from "@nestia/e2e";
import { OpenApi, SwaggerV2 } from "@typia/interface";
import {
  HttpMigration,
  OpenApiConverter,
  OpenApiTypeChecker,
} from "@typia/utils";

/**
 * Verifies Swagger 2 URL-encoded file fields retain their payload contract.
 *
 * Swagger permits file form parameters for either standard form media type or
 * both. Treating files as multipart-only rejects valid documents and prevents
 * the generated binary property from returning to its source representation.
 *
 * 1. Upgrade URL-encoded and dual-media file operations.
 * 2. Verify binary schemas and HTTP migration accept the resulting bodies.
 * 3. Downgrade again and assert the file field and media lists return.
 */
export const test_document_roundtrip_v20_urlencoded_file = (): void => {
  const file = {
    name: "file",
    in: "formData",
    required: true,
    type: "file",
    "x-upload-kind": "attachment",
  } as unknown as SwaggerV2.IOperation.IGeneralParameter;
  const input: SwaggerV2.IDocument = {
    swagger: "2.0",
    consumes: ["application/x-www-form-urlencoded"],
    paths: {
      "/urlencoded-file": {
        post: { parameters: [file], responses: {} },
      },
      "/dual-media-file": {
        post: {
          consumes: [
            "application/x-www-form-urlencoded",
            "multipart/form-data",
          ],
          parameters: [file],
          responses: {},
        },
      },
    },
  };

  const upgraded: OpenApi.IDocument = OpenApiConverter.upgradeDocument(input);
  const property = (
    upgraded.paths!["/urlencoded-file"]!.post!.requestBody!.content![
      "application/x-www-form-urlencoded"
    ]!.schema as OpenApi.IJsonSchema.IObject
  ).properties!.file!;
  TestValidator.predicate(
    "URL-encoded file upgrades to binary",
    OpenApiTypeChecker.isString(property) &&
      property.format === "binary" &&
      (property as unknown as Record<string, unknown>)["x-upload-kind"] ===
        "attachment",
  );
  TestValidator.equals(
    "file supports both form media types",
    Object.keys(
      upgraded.paths!["/dual-media-file"]!.post!.requestBody!.content!,
    ),
    ["application/x-www-form-urlencoded", "multipart/form-data"],
  );
  TestValidator.equals(
    "URL-encoded file migration errors",
    HttpMigration.application(upgraded).errors,
    [],
  );

  const downgraded: SwaggerV2.IDocument = OpenApiConverter.downgradeDocument(
    upgraded,
    "2.0",
  );
  TestValidator.predicate(
    "URL-encoded file round trip",
    downgraded.paths!["/urlencoded-file"]!.post!.parameters!.some(
      (parameter) =>
        "name" in parameter &&
        parameter.name === "file" &&
        "type" in parameter &&
        parameter.type === "file" &&
        (parameter as unknown as Record<string, unknown>)["x-upload-kind"] ===
          "attachment",
    ),
  );
  TestValidator.equals(
    "file form media types round trip",
    downgraded.paths!["/dual-media-file"]!.post!.consumes,
    ["application/x-www-form-urlencoded", "multipart/form-data"],
  );
};
