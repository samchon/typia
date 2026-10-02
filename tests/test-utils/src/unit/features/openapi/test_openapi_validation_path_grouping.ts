import { OpenApi } from "@typia/interface";
import { _test_validate } from "@typia/template/openapi-validation";
import { OpenApiValidator } from "@typia/utils";
import assert from "node:assert/strict";

/**
 * Verifies ambiguous union path grouping preserves diagnostic multiplicity.
 *
 * Distinct invalid leaves can have one ambiguous union owner, while repeated
 * copies of one expected path must not disappear. Deliberately incorrect
 * spoiler oracles must fail rather than certify incomplete diagnostics.
 *
 * 1. Assert literal leaf and ambiguous-owner diagnostics on authored schemas.
 * 2. Execute valid and deliberately missing, extra or repeated spoiler oracles.
 * 3. Cover array discrimination, empty values and invalid path syntax.
 *
 */
export const test_openapi_validation_path_grouping = (): void => {
  const schema: OpenApi.IJsonSchema = {
    oneOf: [
      {
        type: "object",
        properties: { value: { type: "number" }, other: { type: "number" } },
        required: ["value", "other"],
      },
      {
        type: "object",
        properties: { value: { type: "string" }, other: { type: "string" } },
        required: ["value", "other"],
      },
    ],
  };
  const generate = () => ({ value: 1 as unknown, other: 2 as unknown });
  const validate = OpenApiValidator.create({
    schema,
    components: {},
    required: true,
  });
  assert.equal(validate(generate()).success, true);
  const input = generate();
  input.value = false;
  input.other = false;
  const invalid = validate(input);
  assert.equal(invalid.success, false);
  if (!invalid.success)
    assert.deepEqual(
      invalid.errors.map((error) => error.path),
      ["$input"],
    );
  const invoke = (paths: string[]) =>
    _test_validate({
      name: "ambiguous paths",
      schema,
      components: {},
      factory: {
        generate,
        SPOILERS: [
          (value) => {
            value.value = false;
            value.other = false;
            return paths;
          },
        ],
      },
    });
  invoke(["$input.value", "$input.other"]);
  for (const paths of [
    [],
    ["$input.value", "$input.value"],
    ["$input.value", "$input.value", "$input.other"],
  ])
    assert.throws(() => invoke(paths), {
      message:
        "Bug on OpenApiValidator.validate(): failed to detect error on the ambiguous paths type.",
    });
  assert.throws(() => invoke(["wrong.value"]), {
    message: "Invalid spoiler path: wrong.value",
  });
  assert.throws(() => invoke(['$input["value"']), {
    message: 'Invalid spoiler path: $input["value"',
  });

  const leaf: OpenApi.IJsonSchema = {
    type: "object",
    properties: { value: { type: "number" } },
    required: ["value"],
  };
  const exact = (paths: string[]) =>
    _test_validate({
      name: "leaf paths",
      schema: leaf,
      components: {},
      factory: {
        generate: () => ({ value: 1 as unknown }),
        SPOILERS: [
          (value) => {
            value.value = false;
            return paths;
          },
        ],
      },
    });
  exact(["$input.value"]);
  for (const paths of [
    [],
    ["$input.value", "$input.other"],
    ["$input.value", "$input.value"],
  ])
    assert.throws(() => exact(paths), {
      message:
        "Bug on OpenApiValidator.validate(): failed to detect error on the leaf paths type.",
    });
  _test_validate({
    name: "array choice",
    schema: {
      oneOf: [
        { type: "array", items: { type: "number" } },
        { type: "array", items: { type: "string" } },
      ],
    },
    components: {},
    factory: {
      generate: () => [1, 2 as unknown],
      SPOILERS: [
        (value) => {
          value[1] = false;
          return ["$input[1]"];
        },
      ],
    },
  });
  _test_validate({
    name: "empty array",
    schema: { type: "array", items: { type: "number" } },
    components: {},
    factory: { generate: () => [] },
  });
  _test_validate({
    name: "primitive",
    schema: { type: "number" },
    components: {},
    factory: { generate: () => 1 },
  });
  _test_validate({
    name: "nullable object",
    schema: { oneOf: [{ type: "null" }, leaf] },
    components: {},
    factory: {
      generate: () => ({ value: 1 as unknown }),
      SPOILERS: [
        (value) => {
          value.value = false;
          return ["$input.value"];
        },
      ],
    },
  });
};
