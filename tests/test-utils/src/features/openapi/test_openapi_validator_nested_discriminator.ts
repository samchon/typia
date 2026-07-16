import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import { OpenApiValidator } from "@typia/utils";

/**
 * Verifies nested object discriminators keep the most specific present field.
 *
 * A failed discriminator candidate must not fall through to a subsuming object
 * branch that ignores the candidate's extra property. When no top-level
 * discriminator matches, the remaining union must be discriminated again so a
 * present middle-level property is still validated.
 *
 * 1. Build base, middle, and top object variants with cumulative required keys.
 * 2. Accept a valid value from every level under both branch permutations.
 * 3. Reject invalid present middle/top keys at their exact diagnostic paths.
 * 4. Keep the first matching object discriminator responsible for ambiguity.
 */
export const test_openapi_validator_nested_discriminator = (): void => {
  const base: OpenApi.IJsonSchema.IObject = {
    type: "object",
    properties: {
      p1: { type: "string" },
    },
    required: ["p1"],
  };
  const middle: OpenApi.IJsonSchema.IObject = {
    type: "object",
    properties: {
      p1: { type: "string" },
      p2: { type: "number" },
    },
    required: ["p1", "p2"],
  };
  const top: OpenApi.IJsonSchema.IObject = {
    type: "object",
    properties: {
      p1: { type: "string" },
      p2: { type: "number" },
      p3: { type: "boolean" },
    },
    required: ["p1", "p2", "p3"],
  };
  for (const oneOf of [
    [base, middle, top],
    [top, middle, base],
  ] as OpenApi.IJsonSchema.IObject[][]) {
    for (const value of [
      { p1: "base" },
      { p1: "middle", p2: 2 },
      { p1: "top", p2: 3, p3: true },
    ])
      TestValidator.equals(
        `accept ${JSON.stringify(value)} in ${oneOf[0] === base ? "bmt" : "tmb"}`,
        validate(oneOf, value).success,
        true,
      );

    for (const [value, path] of [
      [{ p1: "middle", p2: null }, "$input.p2"],
      [{ p1: "top", p2: 3, p3: null }, "$input.p3"],
    ] as Array<[Record<string, unknown>, string]>) {
      const result = validate(oneOf, value);
      TestValidator.equals(
        `reject ${path} in ${oneOf[0] === base ? "bmt" : "tmb"}`,
        result.success,
        false,
      );
      if (result.success === false)
        TestValidator.equals(`report ${path}`, result.errors[0]?.path, path);
    }
  }

  const shared: OpenApi.IJsonSchema.IObject = {
    type: "object",
    properties: {
      id: { type: "string" },
      children: { type: "array", items: {} },
      access: { oneOf: [{ const: "read" }, { const: "write" }] },
    },
    required: ["id", "children", "access"],
  };
  const shortcut: OpenApi.IJsonSchema.IObject = {
    type: "object",
    properties: {
      id: { type: "string" },
      target: {},
    },
    required: ["id", "target"],
  };
  const ambiguous = validate([shared, shortcut], {
    id: "directory shortcut",
    children: [],
    access: "nothing",
    target: {},
  });
  TestValidator.equals(
    "reject the first matching object discriminator",
    ambiguous.success,
    false,
  );
  if (ambiguous.success === false)
    TestValidator.equals(
      "report the owning discriminator field",
      ambiguous.errors[0]?.path,
      "$input.access",
    );
};

const validate = (
  oneOf: OpenApi.IJsonSchema.IObject[],
  value: unknown,
): ReturnType<typeof OpenApiValidator.validate> =>
  OpenApiValidator.validate({
    components: {},
    schema: { oneOf },
    value,
    required: true,
  });
