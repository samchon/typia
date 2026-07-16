import { TestValidator } from "@nestia/e2e";
import { IValidation, OpenApi } from "@typia/interface";
import { OpenApiValidator } from "@typia/utils";

/**
 * Verifies OpenAPI validation reports only suppress real ancestor paths.
 *
 * The OpenAPI reporter mirrors typia's ordered de-duplication and used the same
 * raw-prefix ancestry test. This matrix keeps the two reporters aligned across
 * sibling order, quoted keys, indexes, and a redundant array parent.
 *
 * 1. Validate the same invalid value against both `a`/`ab` property orders.
 * 2. Require every independent property and array-index failure.
 * 3. Exclude the genuine array-parent failure made redundant by child errors.
 */
export const test_openapi_validator_report_path_boundary = (): void => {
  const input = {
    a: 0,
    ab: 0,
    "a-b": 0,
    items: new Array(11).fill(0),
    duplicates: ["same", "same"],
  };
  const expected: string[] = [
    "$input.a",
    "$input.ab",
    '$input["a-b"]',
    ...input.items.map((_, index) => `$input.items[${index}]`),
    "$input.duplicates",
  ].sort();

  for (const [label, properties] of [
    ["long property first", propertiesOf(["ab", "a"])],
    ["short property first", propertiesOf(["a", "ab"])],
  ] as const) {
    const result: IValidation<unknown> = OpenApiValidator.validate({
      components: {},
      schema: {
        type: "object",
        properties,
        required: Object.keys(properties),
      },
      value: input,
      required: true,
    });
    if (result.success)
      throw new Error(`Expected ${label} input to fail validation.`);
    TestValidator.equals(
      label,
      expected,
      result.errors.map(({ path }) => path).sort(),
    );
  }
};

const propertiesOf = (
  identifiers: readonly ["ab" | "a", "ab" | "a"],
): Record<string, OpenApi.IJsonSchema> =>
  Object.fromEntries([
    ...identifiers.map((key) => [key, { type: "string" }] as const),
    ["a-b", { type: "string" }],
    [
      "items",
      {
        type: "array",
        items: { type: "string" },
      },
    ],
    [
      "duplicates",
      {
        type: "array",
        items: { type: "string" },
        uniqueItems: true,
      },
    ],
  ]);
