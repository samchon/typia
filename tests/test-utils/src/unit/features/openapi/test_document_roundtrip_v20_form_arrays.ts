import { TestValidator } from "@nestia/e2e";
import { OpenApi, SwaggerV2 } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification OpenApiConverter.upgradeDocument and downgradeDocument run on Swagger 2 documents with nested and nullable form arrays; the emended shapes are checked with OpenApiTypeChecker predicates and the downgrade is compared with the source parameters.
 * @evidence contracts/testing.md#independent-expectations The source Swagger document is the oracle for the round trip, and the emended shapes are checked structurally from the Items Object and typia nullable extension rules rather than copied from output.
 * @evidence contracts/testing.md#distinguishing-cases A nested array and a nullable array are the two shapes, each checked in both directions; arrays of objects and non-form locations are not covered here.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported case with node:test under the plugin-free tsconfig.unit.json. Conversion runs in process on authored documents with no native build, installation or host.
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
  TestEquality.equals(
    "array form fields round trip",
    downgraded.paths!["/array-fields"]!.post!.parameters,
    input.paths!["/array-fields"]!.post!.parameters,
  );
};
