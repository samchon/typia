import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that reserved object keys remain own data through parsing and
 * coercion.
 *
 * Reserved names must not mutate prototypes, and inherited values must not
 * satisfy required schema fields.
 *
 * 1. Exercise native/fallback reserved keys, nested constructor keys, inherited
 *    required fields, reserved-name coercion and cyclic schema aliases.
 * 2. Compare the retained results with literal expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse, coerce and validate calls assert reserved-key ownership, retained values, missing inherited fields and terminating alias handling.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output.
 * @evidence contracts/testing.md#distinguishing-cases This case owns native/fallback reserved keys, nested constructor keys, inherited required fields, reserved-name coercion and cyclic schema aliases; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; no consumer installation, native producer or host is needed.
 */
export const test_llm_json_prototype_safe_objects = (): void => {
  for (const [label, input] of [
    ["native", '{"__proto__":{"admin":true},"nested":[{"constructor":1}]}'],
    ["lenient", '{"__proto__":{"admin":true},"nested":[{"constructor":1}],}'],
  ] as const) {
    const parsed = LlmJson.parse<Record<string, unknown>>(input);
    TestEquality.equals(`${label} parse succeeds`, parsed.success, true);
    if (!parsed.success) continue;
    TestValidator.predicate(`${label} owns __proto__`, () =>
      Object.hasOwn(parsed.data, "__proto__"),
    );
    TestEquality.equals(
      `${label} prototype not polluted`,
      (parsed.data as any).admin,
      undefined,
    );
    const child = (parsed.data.nested as Record<string, unknown>[])[0]!;
    TestValidator.predicate(`${label} owns constructor`, () =>
      Object.hasOwn(child, "constructor"),
    );
    TestEquality.equals(
      `${label} constructor value`,
      (child as Record<string, unknown>)["constructor"],
      1,
    );
  }

  const parameters: ILlmSchema.IParameters = {
    type: "object",
    properties: {
      admin: { type: "boolean" },
    },
    required: ["admin"],
    additionalProperties: false,
    $defs: {},
  };
  const inherited = Object.create({ admin: "true" });
  const coerced = LlmJson.coerce<Record<string, unknown>>(
    inherited,
    parameters,
  );
  TestEquality.equals(
    "inherited value is not copied",
    Object.hasOwn(coerced, "admin"),
    false,
  );
  TestEquality.equals(
    "inherited value cannot satisfy validation",
    LlmJson.validate(parameters)(coerced).success,
    false,
  );

  const reservedParameters: ILlmSchema.IParameters = {
    type: "object",
    properties: Object.fromEntries([["__proto__", { type: "boolean" }]]),
    required: ["__proto__"],
    additionalProperties: false,
    $defs: {},
  };
  const reservedValue = Object.fromEntries([["__proto__", "true"]]);
  const reserved = LlmJson.coerce<Record<string, unknown>>(
    reservedValue,
    reservedParameters,
  );
  TestValidator.predicate("reserved argument stays own", () =>
    Object.hasOwn(reserved, "__proto__"),
  );
  TestEquality.equals("reserved argument coerces", reserved["__proto__"], true);

  const cyclicParameters: ILlmSchema.IParameters = {
    type: "object",
    properties: { loop: { $ref: "#/$defs/A" } },
    required: ["loop"],
    additionalProperties: false,
    $defs: {
      A: { $ref: "#/$defs/B" },
      B: { $ref: "#/$defs/A" },
    },
  };
  const cyclic = LlmJson.coerce<Record<string, unknown>>(
    { loop: "unchanged" },
    cyclicParameters,
  );
  TestEquality.equals(
    "cyclic aliases terminate without coercion",
    cyclic.loop,
    "unchanged",
  );
};
