import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import { LlmJson } from "@typia/utils";

/**
 * Verifies LLM JSON parsing and coercion treat object keys as own data.
 *
 * The lenient parser assigned into ordinary objects, allowing `__proto__` to
 * replace the result prototype, while coercion used inherited membership and
 * copied attacker-controlled prototype values into required arguments. Both
 * native and lenient parse paths must preserve reserved names as data.
 *
 * 1. Parse nested reserved keys through native and trailing-comma fallbacks.
 * 2. Require own properties without prototype mutation at every level.
 * 3. Coerce an object with an inherited required field and prove validation still
 *    reports it missing.
 */
export const test_llm_json_prototype_safe_objects = (): void => {
  for (const [label, input] of [
    ["native", '{"__proto__":{"admin":true},"nested":[{"constructor":1}]}'],
    ["lenient", '{"__proto__":{"admin":true},"nested":[{"constructor":1}],}'],
  ] as const) {
    const parsed = LlmJson.parse<Record<string, unknown>>(input);
    TestValidator.equals(`${label} parse succeeds`, parsed.success, true);
    if (!parsed.success) continue;
    TestValidator.predicate(`${label} owns __proto__`, () =>
      Object.hasOwn(parsed.data, "__proto__"),
    );
    TestValidator.equals(
      `${label} prototype not polluted`,
      (parsed.data as any).admin,
      undefined,
    );
    const child = (parsed.data.nested as Record<string, unknown>[])[0]!;
    TestValidator.predicate(`${label} owns constructor`, () =>
      Object.hasOwn(child, "constructor"),
    );
    TestValidator.equals(
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
  TestValidator.equals(
    "inherited value is not copied",
    Object.hasOwn(coerced, "admin"),
    false,
  );
  TestValidator.equals(
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
  TestValidator.equals(
    "reserved argument coerces",
    reserved["__proto__"],
    true,
  );

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
  TestValidator.equals(
    "cyclic aliases terminate without coercion",
    cyclic.loop,
    "unchanged",
  );
};
