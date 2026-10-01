import { OpenApiTypeChecker, OpenApiValidator } from "@typia/utils";
import assert from "node:assert/strict";

/**
 * Verifies unknown format annotations cannot invoke inherited object members.
 *
 * Unknown names leave string validation to the remaining schema constraints.
 * Registered formats still apply their own grammar, including after calls with
 * names shared with Object.prototype.
 *
 * 1. Exercise unknown and inherited names through dispatch and both consumers.
 * 2. Preserve string type, pattern and length decisions independently.
 * 3. Check positive and negative registered-format controls repeatedly.
 *
 * @evidence contracts/testing.md#behavioral-verification Public validator and constant-schema coverage calls execute the maintained dispatch owner. Unknown format annotations must accept authored strings without throwing; independent schema constraints and known formats must still reject their negative twins.
 * @evidence contracts/testing.md#independent-expectations The supported registry and unknown-format fallback define the decisions. Explicit unknown/Object.prototype names, authored string constants and independently invalid type, pattern, length and known-format values establish expectations without deriving them from another checker.
 * @evidence contracts/testing.md#distinguishing-cases Empty/custom/case-different formats and standard inherited names cover lookup boundaries with empty and ordinary strings. Wrong type, short/long/pattern-mismatching values and email/date/UUID/IPv4 twins distinguish annotation fallback from bypassing validation; repeated calls verify stable dispatch.
 * @evidence contracts/testing.md#execution-ownership The exported case is registered in the plugin-free node:test runner. It uses authored schemas and the real portable dispatch/validator/coverage implementations, with no native schema producer, compiler fixture or substituted registry.
 */
export const test_openapi_unknown_string_formats = (): void => {
  const unknown = [
    "",
    "unknown-format",
    "EMAIL",
    "__proto__",
    "constructor",
    "toString",
    "toLocaleString",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "valueOf",
    "__defineGetter__",
    "__defineSetter__",
    "__lookupGetter__",
    "__lookupSetter__",
  ];
  for (const format of unknown) {
    const validate = OpenApiValidator.create({
      components: {},
      schema: { type: "string", format },
      required: true,
    });
    for (let repeat = 0; repeat < 2; ++repeat)
      for (const value of ["", "plain text"]) {
        assert.deepEqual(validate(value), { success: true, data: value });
        assert.equal(
          OpenApiTypeChecker.covers({
            components: {},
            x: { type: "string", format },
            y: { const: value },
          }),
          true,
          format,
        );
      }
    assert.equal(validate(1).success, false, format);
    assert.equal(
      OpenApiTypeChecker.covers({
        components: {},
        x: { type: "string", format },
        y: { const: 1 },
      }),
      false,
      format,
    );
    const constrained = OpenApiValidator.create({
      components: {},
      schema: {
        type: "string",
        format,
        minLength: 3,
        maxLength: 6,
        pattern: "^abc$",
      },
      required: true,
    });
    assert.equal(constrained("abc").success, true, format);
    for (const value of ["ab", "abcd", "abcabcabc"])
      assert.equal(constrained(value).success, false, format);
  }
  for (const [format, positive, negative] of [
    ["email", "a@example.com", "plain text"],
    ["date", "2024-02-29", "2023-02-29"],
    ["uuid", "123e4567-e89b-12d3-a456-426614174000", "plain text"],
    ["ipv4", "192.0.2.1", "256.0.2.1"],
  ]) {
    const validate = OpenApiValidator.create({
      components: {},
      schema: { type: "string", format },
      required: true,
    });
    for (let repeat = 0; repeat < 2; ++repeat)
      for (const [value, expected] of [
        [positive!, true],
        [negative!, false],
      ] as const) {
        assert.equal(validate(value).success, expected, format);
        assert.equal(
          OpenApiTypeChecker.covers({
            components: {},
            x: { type: "string", format },
            y: { const: value },
          }),
          expected,
          format,
        );
      }
  }
};
