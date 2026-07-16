import { TestValidator } from "@nestia/e2e";
import { OpenApi, SwaggerV2 } from "@typia/interface";
import { OpenApiConverter, OpenApiTypeChecker } from "@typia/utils";

/**
 * Verifies Swagger 2 form arrays remain simple fields through conversion.
 *
 * Swagger Items Objects may recurse, and typia's nullable extension applies to
 * the array itself as well as its items. Both directions must accept the same
 * recursively simple shapes instead of rejecting their own output.
 *
 * 1. Upgrade nested and nullable Swagger form array parameters.
 * 2. Assert the emended field shapes retain both array boundaries and null.
 * 3. Downgrade the document and compare the original parameter contracts.
 */
export const test_document_roundtrip_v20_form_arrays = (): void => {
  const input: SwaggerV2.IDocument = {
    swagger: "2.0",
    consumes: ["multipart/form-data"],
    paths: {
      "/array-fields": {
        post: {
          parameters: [
            {
              name: "matrix",
              in: "formData",
              type: "array",
              items: {
                type: "array",
                items: { type: "integer" },
              },
            },
            {
              name: "maybeTags",
              in: "formData",
              type: "array",
              items: { type: "string" },
              "x-nullable": true,
            },
          ],
          responses: {},
        },
      },
    },
  };

  const upgraded: OpenApi.IDocument = OpenApiConverter.upgradeDocument(input);
  const properties = (
    upgraded.paths!["/array-fields"]!.post!.requestBody!.content![
      "multipart/form-data"
    ]!.schema as OpenApi.IJsonSchema.IObject
  ).properties!;
  TestValidator.predicate(
    "nested form array",
    OpenApiTypeChecker.isArray(properties.matrix!) &&
      OpenApiTypeChecker.isArray(properties.matrix.items) &&
      OpenApiTypeChecker.isInteger(properties.matrix.items.items),
  );
  TestValidator.predicate(
    "nullable form array",
    OpenApiTypeChecker.isOneOf(properties.maybeTags!) &&
      properties.maybeTags.oneOf.some(OpenApiTypeChecker.isArray) &&
      properties.maybeTags.oneOf.some(OpenApiTypeChecker.isNull),
  );

  const downgraded: SwaggerV2.IDocument = OpenApiConverter.downgradeDocument(
    upgraded,
    "2.0",
  );
  TestValidator.equals(
    "array form fields round trip",
    downgraded.paths!["/array-fields"]!.post!.parameters,
    input.paths!["/array-fields"]!.post!.parameters,
  );
};
