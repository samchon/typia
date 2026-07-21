import { TestValidator } from "@nestia/e2e";
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
 */
export const test_json_schemas_v3_0_exclusive_bounds = (): void => {
  const v31 = typia.json.schemas<[IBounds], "3.1">();
  const v30 = typia.json.schemas<[IBounds], "3.0">();
  const props31: any = (v31.components as any).schemas.IBounds.properties;
  const props30: any = (v30.components as any).schemas.IBounds.properties;

  // 3.1 keeps the numeric form it always had.
  TestValidator.equals(
    "3.1 keeps a numeric exclusiveMinimum",
    props31.ratio.exclusiveMinimum,
    0,
  );
  TestValidator.equals(
    "3.1 keeps a numeric exclusiveMaximum",
    props31.ratio.exclusiveMaximum,
    1,
  );

  // 3.0 spells the same bound as a boolean beside the inclusive keyword.
  TestValidator.equals(
    "3.0 exclusive bounds become boolean flags",
    {
      minimum: props30.ratio.minimum,
      exclusiveMinimum: props30.ratio.exclusiveMinimum,
      maximum: props30.ratio.maximum,
      exclusiveMaximum: props30.ratio.exclusiveMaximum,
    },
    { minimum: 0, exclusiveMinimum: true, maximum: 1, exclusiveMaximum: true },
  );
  TestValidator.equals(
    "3.0 keeps an inclusive bound beside an exclusive one",
    {
      minimum: props30.mixed.minimum,
      exclusiveMinimum: props30.mixed.exclusiveMinimum,
      maximum: props30.mixed.maximum,
      exclusiveMaximum: props30.mixed.exclusiveMaximum,
    },
    {
      minimum: 0,
      exclusiveMinimum: true,
      maximum: 10,
      exclusiveMaximum: undefined,
    },
  );

  // NEGATIVE TWIN: an inclusive-only leaf gains no flag in either dialect.
  TestValidator.equals(
    "an inclusive bound stays inclusive",
    {
      minimum: props30.plain.minimum,
      exclusiveMinimum: props30.plain.exclusiveMinimum,
      maximum: props30.plain.maximum,
      exclusiveMaximum: props30.plain.exclusiveMaximum,
    },
    {
      minimum: 0,
      exclusiveMinimum: undefined,
      maximum: 10,
      exclusiveMaximum: undefined,
    },
  );

  // BOUNDARY: a bound of zero is the case a boolean coercion reads as false.
  TestValidator.equals(
    "a zero bound survives as a flag",
    {
      minimum: props30.zero.minimum,
      exclusiveMinimum: props30.zero.exclusiveMinimum,
    },
    { minimum: 0, exclusiveMinimum: true },
  );

  // The rule holds at depth, not only on a top-level property.
  TestValidator.equals(
    "an array element carries the 3.0 form",
    {
      maximum: props30.list.items.maximum,
      exclusiveMaximum: props30.list.items.exclusiveMaximum,
    },
    { maximum: 5, exclusiveMaximum: true },
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
  TestValidator.equals(
    `no numeric exclusive bound survives (${offenders[0] ?? "none"})`,
    offenders.length,
    0,
  );
};
