import { OpenApi } from "@typia/interface";
import { _test_validate } from "@typia/oracle/openapi-validation";
import { OpenApiValidator } from "@typia/utils";
import assert from "node:assert/strict";

/**
 * Verifies invalid spoiler-schema references cannot become unknown branches.
 *
 * A valid branch can accept the clean fixture even when another union branch
 * has a broken reference. The path oracle must diagnose that broken schema
 * instead of fabricating an unconstrained branch during normalization.
 *
 * 1. Validate a clean object against an authored union's valid branch.
 * 2. Spoil its numeric field with missing, malformed and cyclic neighbor refs.
 * 3. Require the helper to identify each reference failure explicitly.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct validator clean acceptance is a positive control, then the shared _test_validate must throw the literal invalid-schema reason during expected-path normalization. The cases distinguish explicit reference failure from an empty-schema fallback and do not replace a product method.
 * @evidence contracts/testing.md#independent-expectations Authored union edges, missing own components and malformed local tokens determine each literal reason. The clean number field and string spoiler are independently stated; the validator's error output never supplies expected paths or messages.
 * @evidence contracts/testing.md#distinguishing-cases Covers absent dictionaries, missing targets, malformed tilde and foreign references, inherited-only components and self/two-key alias cycles alongside a valid object branch. Each case retains the same clean value and changes only its numeric field before normalization reaches the invalid neighbor.
 * @evidence contracts/testing.md#execution-ownership The matching exported case is registered by test-utils unit plugin-free node:test entry and directly executes the actual shared oracle and validator. No native schema producer is needed to test malformed authored reference graphs.
 */
export const test_openapi_validation_invalid_references = (): void => {
  const leaf: OpenApi.IJsonSchema = {
    type: "object",
    properties: { value: { type: "number" } },
    required: ["value"],
  };
  const scenarios: {
    reference: string;
    components: OpenApi.IComponents;
    reason: string;
  }[] = [
    {
      reference: "#/components/schemas/Missing",
      components: {},
      reason: 'unable to find reference type "Missing".',
    },
    {
      reference: "#/components/schemas/A~2B",
      components: { schemas: { "A~2B": leaf } },
      reason: 'unable to find reference type "#/components/schemas/A~2B".',
    },
    {
      reference: "#/definitions/A",
      components: { schemas: { A: leaf } },
      reason: 'unable to find reference type "#/definitions/A".',
    },
    {
      reference: "#/components/schemas/A",
      components: { schemas: Object.create({ A: leaf }) },
      reason: 'unable to find reference type "A".',
    },
    {
      reference: "#/components/schemas/A",
      components: { schemas: { A: { $ref: "#/components/schemas/A" } } },
      reason: 'recursive reference type "A".',
    },
    {
      reference: "#/components/schemas/A",
      components: {
        schemas: {
          A: { $ref: "#/components/schemas/B" },
          B: { $ref: "#/components/schemas/A" },
        },
      },
      reason: 'recursive reference type "A".',
    },
  ];
  for (const scenario of scenarios) {
    const schema: OpenApi.IJsonSchema = {
      oneOf: [leaf, { $ref: scenario.reference }],
    };
    const factory = {
      generate: () => ({ value: 1 as unknown }),
      SPOILERS: [
        (input: { value: unknown }) => {
          input.value = "invalid";
          return ["$input.value"];
        },
      ],
    };
    assert.equal(
      OpenApiValidator.create({
        schema,
        components: scenario.components,
        required: true,
      })(factory.generate()).success,
      true,
    );
    assert.throws(
      () =>
        _test_validate({
          name: "invalid references",
          schema,
          components: scenario.components,
          factory,
        }),
      { message: `Invalid OpenAPI spoiler schema: ${scenario.reason}` },
    );
  }
};
