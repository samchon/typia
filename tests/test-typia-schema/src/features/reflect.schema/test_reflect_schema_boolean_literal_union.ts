import { TestValidator } from "@nestia/e2e";
import typia from "typia";

/**
 * Verifies a boolean-literal discriminant survives in a tagged union's
 * metadata.
 *
 * Pins the boolean-literal constant collection reported in #1841: a union keyed
 * on `ok: false | true` must keep both literal values, one per branch. The
 * collector reads each branch's `ok` constant independently, so a regression
 * that defaulted the value (or compared the wrong literal) would collapse both
 * branches onto `true` and silently break discriminated-union narrowing — while
 * the existing `<true>`-only coverage in `test_reflect_schema_constant` stayed
 * green.
 *
 * 1. Reflect a bare `false` literal and assert its boolean constant is `false`.
 * 2. Reflect `{ ok: false; ... } | { ok: true; ... }`.
 * 3. Collect every object's `ok` boolean constant and assert both `false` and
 *    `true` are present (neither branch collapsed).
 */
export const test_reflect_schema_boolean_literal_union = (): void => {
  // 1) a bare `false` literal must report `false`, not the `true`-only path
  const literal = typia.reflect.schema<false>();
  TestValidator.equals(
    "false literal constant type",
    literal.schema.constants[0]?.type,
    "boolean",
  );
  TestValidator.equals(
    "false literal constant value",
    literal.schema.constants[0]?.values[0]?.value,
    false,
  );

  // 2) the discriminated union from #1841
  type U =
    | { ok: false; error: { code: string } }
    | { ok: true; code: string; data: { id: string } };
  const union = typia.reflect.schema<U>();

  // 3) gather the boolean constant of every `ok` property across branches
  const okValues: boolean[] = [];
  for (const object of union.components.objects)
    for (const property of object.properties) {
      const isOkKey =
        property.key.constants[0]?.type === "string" &&
        property.key.constants[0]?.values[0]?.value === "ok";
      if (!isOkKey) continue;
      const constant = property.value.constants[0];
      if (constant?.type !== "boolean") continue;
      for (const value of constant.values)
        if (typeof value.value === "boolean") okValues.push(value.value);
    }

  TestValidator.predicate("false branch survives", () =>
    okValues.includes(false),
  );
  TestValidator.predicate("true branch survives", () =>
    okValues.includes(true),
  );
};
