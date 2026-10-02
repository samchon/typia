import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

interface IBounds {
  /** Exclusive on both ends. */
  ratio: number & tags.ExclusiveMinimum<0> & tags.ExclusiveMaximum<1>;
  /** Exclusive below, inclusive above. */
  mixed: number & tags.ExclusiveMinimum<0> & tags.Maximum<10>;
  /** Inclusive on both ends — the negative twin. */
  plain: number & tags.Minimum<0> & tags.Maximum<10>;
  /** A bound of zero, the value a boolean coercion reads as false. */
  zero: number & tags.ExclusiveMinimum<0>;
  /** Inside an array. */
  list: Array<number & tags.ExclusiveMaximum<5>>;
  /** Inside a union member. */
  either: (number & tags.ExclusiveMinimum<1>) | string;
}

/**
 * Verifies a document emitted for OpenAPI 3.0 spells an exclusive bound the way
 * that dialect defines it.
 *
 * The 3.0 Schema Object descends from JSON Schema draft-04, where
 * `exclusiveMinimum` and `exclusiveMaximum` are booleans qualifying `minimum`
 * and `maximum`; the numeric spelling belongs to 3.1. The downgrader carried
 * the number through, so a document labeled 3.0 held a 3.1 keyword with no
 * `minimum` beside it — and a 3.0 reader taking the value as the boolean its
 * dialect declares drops the bound entirely (#2300).
 *
 * The oracle here is the 3.0 dialect, not the other downgrader. `@typia/utils`
 * and the Go port are pinned against each other by
 * `test_json_schemas_v3_0_parity_converter`, and both read this rule the same
 * wrong way, so that oracle agreed with itself.
 *
 * 1. Emit the same type for "3.1" and for "3.0".
 * 2. Require the 3.1 document to keep the numeric form, and the 3.0 document to
 *    carry a boolean beside the inclusive keyword it qualifies.
 * 3. Require no numeric `exclusive*` to survive anywhere in the 3.0 document, at
 *    any depth.
 *
 * @evidence contracts/testing.md#behavioral-verification The actual exported case asserts that numeric 3.1 exclusive bounds become Boolean 3.0 flags beside the retained inclusive bound at every asserted depth.
 * @evidence contracts/testing.md#independent-expectations Handwritten 3.0 versus 3.1 keyword/value objects derive from their dialect contracts, not the other downgrader; bounds normalizes absence to null so lost keywords cannot pass.
 * @evidence contracts/testing.md#distinguishing-cases Inclusive/exclusive/mixed/zero bounds, array depth and global nonnumeric flags retain all checks; union-alternative bound presence now distinguishes loss from a vacuously clean walk.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_json_schemas_v3_0_exclusive_bounds in test-typia-schema start. Actual typia.json calls and any complementary generated validator are rewritten in the suite project; the emitted results are evaluated and consumed in the existing process.
 * @evidence contracts/e2e.md#necessary-boundary The native dialect converter must emit evaluated schema values with retained numerical meaning and correct 3.0 keyword types. Direct converter/writer unit calls cannot establish actual TypeScript call/signature resolution and evaluated public schema assembly together.
 * @evidence contracts/e2e.md#shared-execution All declared variants join the existing ttsx schema-suite project and process. Siblings reuse the content-keyed native plugin artifact; the case adds no independent compiler launch or install per type/dialect.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Generated collections/applications and conversion projections are invocation-local; declarations remain immutable. ttsc owns content-keyed artifact invalidation and the suite owns process termination. No cold-cache or installation transition is asserted.
 * @evidence contracts/e2e.md#preserved-coverage Inclusive/exclusive/mixed/zero bounds, array depth and global nonnumeric flags retain all checks; union-alternative bound presence now distinguishes loss from a vacuously clean walk. Every original producer call, conversion and assertion remains enrolled under the same exported name; no meaningfully different dialect or graph consumer was deleted.
 */
export const test_json_schemas_v3_0_exclusive_bounds = (): void => {
  const v31 = typia.json.schemas<[IBounds], "3.1">();
  const v30 = typia.json.schemas<[IBounds], "3.0">();
  const props31: any = (v31.components as any).schemas.IBounds.properties;
  const props30: any = (v30.components as any).schemas.IBounds.properties;

  // Every bound comparison below reads through `bounds`, which turns an absent
  // keyword into `null` rather than leaving it `undefined`.
  //
  // This file exists to check *which* keywords the 3.0 downgrade emits, so a
  // lost keyword must fail loudly. The one-way `TestValidator.equals` once let
  // an actual that lost a keyword compare as `{}` (#2350); `TestEquality` now
  // compares both key sets (#2401), and the normalization keeps every keyword
  // visible in a failure message as an explicit `null`.
  const bounds = (node: any, ...keys: string[]): Record<string, unknown> =>
    Object.fromEntries(keys.map((key) => [key, node[key] ?? null]));

  // 3.1 keeps the numeric form it always had.
  TestEquality.equals(
    "3.1 keeps a numeric exclusiveMinimum",
    props31.ratio.exclusiveMinimum,
    0,
  );
  TestEquality.equals(
    "3.1 keeps a numeric exclusiveMaximum",
    props31.ratio.exclusiveMaximum,
    1,
  );

  // 3.0 spells the same bound as a boolean beside the inclusive keyword.
  TestEquality.equals(
    "3.0 exclusive bounds become boolean flags",
    bounds(
      props30.ratio,
      "minimum",
      "exclusiveMinimum",
      "maximum",
      "exclusiveMaximum",
    ),
    { minimum: 0, exclusiveMinimum: true, maximum: 1, exclusiveMaximum: true },
  );
  TestEquality.equals(
    "3.0 keeps an inclusive bound beside an exclusive one",
    bounds(
      props30.mixed,
      "minimum",
      "exclusiveMinimum",
      "maximum",
      "exclusiveMaximum",
    ),
    {
      minimum: 0,
      exclusiveMinimum: true,
      maximum: 10,
      exclusiveMaximum: null,
    },
  );

  // NEGATIVE TWIN: an inclusive-only leaf gains no flag in either dialect.
  TestEquality.equals(
    "an inclusive bound stays inclusive",
    bounds(
      props30.plain,
      "minimum",
      "exclusiveMinimum",
      "maximum",
      "exclusiveMaximum",
    ),
    {
      minimum: 0,
      exclusiveMinimum: null,
      maximum: 10,
      exclusiveMaximum: null,
    },
  );

  // BOUNDARY: a bound of zero is the case a boolean coercion reads as false.
  TestEquality.equals(
    "a zero bound survives as a flag",
    bounds(props30.zero, "minimum", "exclusiveMinimum"),
    { minimum: 0, exclusiveMinimum: true },
  );

  // The rule holds at depth, not only on a top-level property.
  TestEquality.equals(
    "an array element carries the 3.0 form",
    bounds(props30.list.items, "maximum", "exclusiveMaximum"),
    { maximum: 5, exclusiveMaximum: true },
  );
  const numberAlternative = props30.either.oneOf.find(
    (schema: any) => schema.type === "number",
  );
  TestEquality.equals(
    "a union alternative retains the 3.0 bound",
    bounds(numberAlternative ?? {}, "minimum", "exclusiveMinimum"),
    { minimum: 1, exclusiveMinimum: true },
  );

  // STRUCTURAL: nothing numeric may survive anywhere in the 3.0 document.
  const offenders: string[] = [];
  const walk = (node: any, path: string): void => {
    if (node === null || typeof node !== "object") return;
    if (Array.isArray(node)) {
      node.forEach((item, index) => walk(item, `${path}[${index}]`));
      return;
    }
    for (const key of ["exclusiveMinimum", "exclusiveMaximum"] as const)
      if (node[key] !== undefined && typeof node[key] !== "boolean")
        offenders.push(`${path}.${key} = ${JSON.stringify(node[key])}`);
    for (const [key, value] of Object.entries(node))
      walk(value, `${path}.${key}`);
  };
  walk(v30, "$");
  TestEquality.equals(
    `no numeric exclusive bound survives (${offenders[0] ?? "none"})`,
    offenders.length,
    0,
  );
};
