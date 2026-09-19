import { primitive_equal_to } from "../utils/primitive_equal_to";

/**
 * Verifies the JSON oracle compares both sides.
 *
 * `primitive_equal_to` walked only its first argument's keys, and the stringify
 * internals pass the parsed output first, so a property the stringifier dropped
 * passed every generated `json.stringify` case (#2401). Each case runs in both
 * argument orders, because the hole existed in only one of them.
 *
 * 1. Pin equal JSON values, nested objects and arrays included, as equal.
 * 2. Pin a dropped key, a changed value, and a shorter array as unequal in both
 *    orders.
 * 3. Require the tracer to name the first differing path.
 */
export const test_primitive_equal_to_oracle = (): void => {
  const wrong: string[] = [];
  for (const [title, x, y, equal] of CASES)
    for (const [order, a, b] of [
      ["forward", x, y],
      ["reverse", y, x],
    ] as const) {
      const actual: boolean = primitive_equal_to(a, b, { silent: true });
      if (actual !== equal) wrong.push(`${title} (${order}) -> ${actual}`);
    }

  const tracer: { value?: string; silent?: boolean } = { silent: true };
  primitive_equal_to({ a: [1, 2] }, { a: [1, 3] }, tracer);
  if (tracer.value !== "$input.a[1]")
    wrong.push(`tracer -> ${String(tracer.value)}`);

  if (wrong.length !== 0)
    throw new Error(
      `Bug on primitive_equal_to(): wrong answers.\n  - ${wrong.join("\n  - ")}`,
    );
};

const CASES: Array<[string, unknown, unknown, boolean]> = [
  [
    "equal object",
    { a: 1, b: { c: [1, "x", null] } },
    { a: 1, b: { c: [1, "x", null] } },
    true,
  ],
  ["dropped key", { a: 1, b: 2 }, { a: 1 }, false],
  ["dropped nested key", { a: { b: 1 } }, { a: {} }, false],
  ["changed value", { a: 1 }, { a: 2 }, false],
  ["null against object", { a: null }, { a: {} }, false],
  ["shorter array", [1, 2], [1], false],
];
