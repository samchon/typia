import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiValidator } from "@typia/utils";

/**
 * Verifies array-union validation is independent of branch ordering.
 *
 * Array discrimination uses the first element as a fast predicator. A first
 * element may satisfy more than one branch even when a later element disproves
 * the first candidate, so committing to that candidate changes the result.
 *
 * 1. Build two non-covering array branches with an overlapping first element.
 * 2. Require the same valid value to pass under both branch permutations.
 * 3. Require invalid arrays to fail and object discriminators to keep detail.
 */
export const test_openapi_validator_array_union_permutation = (): void => {
  const pattern: OpenApi.IJsonSchema.IArray = {
    type: "array",
    items: { type: "string", pattern: "^a" },
  };
  const short: OpenApi.IJsonSchema.IArray = {
    type: "array",
    items: { type: "string", maxLength: 2 },
  };
  const validate = (
    oneOf: [OpenApi.IJsonSchema.IArray, OpenApi.IJsonSchema.IArray],
    value: string[],
  ): boolean =>
    OpenApiValidator.validate({
      components: {},
      schema: { oneOf },
      value,
      required: true,
    }).success;

  for (const branches of [
    [pattern, short],
    [short, pattern],
  ] as Array<[OpenApi.IJsonSchema.IArray, OpenApi.IJsonSchema.IArray]>) {
    TestValidator.equals(
      `valid ${branches[0] === pattern ? "pattern-first" : "short-first"}`,
      validate(branches, ["a", "bb"]),
      true,
    );
    TestValidator.equals(
      `invalid ${branches[0] === pattern ? "pattern-first" : "short-first"}`,
      validate(branches, ["a", "bbb"]),
      false,
    );
  }

  const objectResult = OpenApiValidator.validate({
    components: {},
    schema: {
      oneOf: [
        {
          type: "object",
          properties: {
            kind: { const: "cat" },
            lives: { type: "integer" },
          },
          required: ["kind", "lives"],
        },
        {
          type: "object",
          properties: {
            kind: { const: "dog" },
            bark: { type: "boolean" },
          },
          required: ["kind", "bark"],
        },
      ],
    },
    value: { kind: "cat", lives: "nine" },
    required: true,
  });
  TestValidator.equals(
    "invalid object discriminator",
    objectResult.success,
    false,
  );
  if (objectResult.success === false)
    TestValidator.equals(
      "object discriminator retains the property error",
      objectResult.errors[0]?.path,
      "$input.lives",
    );
};
