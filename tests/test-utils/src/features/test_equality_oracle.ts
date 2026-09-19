import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";

/**
 * Verifies the shared assertion oracle reads every value kind as data.
 *
 * `TestEquality` replaced `TestValidator.equals` across the suites because the
 * latter walked only its first argument's keys and saw no content in `Date`,
 * `Map`, or `Set` (#2401). Every suite now trusts this oracle, so each rule it
 * documents is pinned here in both argument orders: a rule that held in only
 * one order would reopen the one-way trap under another name.
 *
 * The early-warning pass on the migration found holes this table now closes: a
 * missing key named like an inherited method read the prototype's function and
 * was skipped, functions were ignored even as array elements, binary and other
 * built-in values compared as keyless objects, sets ignored multiplicity and
 * the key exception, and a cycle overflowed the stack. A second pass found a
 * cycle through a set still overflowing, kinds read from `Symbol.toStringTag`
 * while branches were chosen by `instanceof`, and errors compared without their
 * own fields.
 *
 * 1. Pin each equal pair to pass `equals` in both orders.
 * 2. Pin each unequal pair to fail `equals` in both orders.
 * 3. Pin `subset` to skip only object keys the expected value leaves out.
 * 4. Pin `difference` paths and the failure message.
 *
 * This sits directly under `features` beside `test_total_comparison_shape`: it
 * pins the assertion harness every suite shares.
 */
export const test_equality_oracle = (): void => {
  const date = (text: string): Date => new Date(text);
  const same: Array<[string, unknown, unknown]> = [
    ["primitive", 1, 1],
    ["bigint", 1n, 1n],
    ["NaN", NaN, NaN],
    ["undefined key", { a: 1, b: undefined }, { a: 1 }],
    ["function key", { a: 1, f: () => 1 }, { a: 1 }],
    ["date", date("2026-01-01"), date("2026-01-01")],
    ["invalid date", date("invalid"), date("invalid")],
    ["map", new Map([["a", { x: 1 }]]), new Map([["a", { x: 1 }]])],
    ["set", new Set([1, 2]), new Set([2, 1])],
    [
      "set of objects",
      new Set([{ x: 1 }, { x: 2 }]),
      new Set([{ x: 2 }, { x: 1 }]),
    ],
    [
      "nested",
      { a: [{ b: date("2026-01-01") }] },
      { a: [{ b: date("2026-01-01") }] },
    ],
    ["ignored prototype", Object.create({ inherited: 1 }), {}],
    ["regexp", /a+/g, /a+/g],
    ["error", new Error("lost"), new Error("lost")],
    ["bytes", new Uint8Array([1, 2]), new Uint8Array([1, 2])],
    ["buffer", new Uint8Array([1, 2]).buffer, new Uint8Array([1, 2]).buffer],
    ["same function element", [same_function], [same_function]],
    ["cycle", cycle(1), cycle(1)],
    ["cycle through a set", set_cycle(1), set_cycle(1)],
    ["inherited map prototype", Object.create(Map.prototype), {}],
    ["tagged view", tagged_view([1, 2]), tagged_view([1, 2])],
  ];
  const different: Array<[string, unknown, unknown]> = [
    ["primitive", 1, 2],
    ["bigint", 1n, 2n],
    ["NaN and number", NaN, 1],
    ["null and object", null, {}],
    ["null and undefined", null, undefined],
    ["string and number", "1", 1],
    ["dropped key", { a: 1, b: 2 }, { a: 1 }],
    ["undefined and null value", { a: undefined }, { a: null }],
    ["nested dropped key", { a: { b: 1 } }, { a: {} }],
    ["array length", [1, 2], [1]],
    ["array and object", [], {}],
    ["date", date("2026-01-01"), date("2026-01-02")],
    ["date and object", date("2026-01-01"), {}],
    ["map value", new Map([["a", 1]]), new Map([["a", 2]])],
    ["map key", new Map([["a", 1]]), new Map([["b", 1]])],
    [
      "map size",
      new Map([["a", 1]]),
      new Map([
        ["a", 1],
        ["b", 2],
      ]),
    ],
    ["set member", new Set([1]), new Set([2])],
    ["set size", new Set([1]), new Set([1, 2])],
    ["set of objects", new Set([{ x: 1 }]), new Set([{ x: 2 }])],
    ["map and set", new Map(), new Set()],
    ["map and object", new Map([["a", 1]]), { a: 1 }],
    ["missing key named like an inherited method", { constructor: 1 }, {}],
    ["missing key named like an inherited value", { toString: "x" }, {}],
    ["inherited data", { a: 1 }, Object.create({ a: 1 })],
    ["function element", [() => 1], [42]],
    ["different function elements", [() => 1], [() => 1]],
    ["regexp flags", /a+/g, /a+/i],
    ["regexp source", /a+/g, /b+/g],
    ["error message", new Error("a"), new Error("b")],
    ["bytes", new Uint8Array([1]), new Uint8Array([2])],
    ["byte length", new Uint8Array([1]), new Uint8Array([1, 0])],
    ["typed array kind", new Uint8Array([1]), new Int8Array([1])],
    ["bytes and object", new Uint8Array([1]), { 0: 1 }],
    ["buffer length", new ArrayBuffer(1), new ArrayBuffer(2)],
    [
      "set multiplicity",
      new Set([{ a: 1 }, { a: 1 }, { a: 2 }]),
      new Set([{ a: 1 }, { a: 2 }, { a: 2 }]),
    ],
    ["cycle", cycle(1), cycle(2)],
    ["cycle through a set", set_cycle(1), set_cycle(2)],
    ["tagged view bytes", tagged_view([1]), tagged_view([2])],
    ["error field", error_with("$input.a"), error_with("$input.b")],
    ["error kind", new Error("a"), new TypeError("a")],
  ];
  for (const [name, x, y] of same) {
    TestValidator.predicate(
      `same ${name}`,
      passes(() => TestEquality.equals(name, x, y)),
    );
    TestValidator.predicate(
      `same ${name}, reversed`,
      passes(() => TestEquality.equals(name, y, x)),
    );
  }
  for (const [name, x, y] of different) {
    TestValidator.predicate(
      `different ${name}`,
      passes(() => TestEquality.equals(name, x, y)) === false,
    );
    TestValidator.predicate(
      `different ${name}, reversed`,
      passes(() => TestEquality.equals(name, y, x)) === false,
    );
  }

  // exception skips the named key on both sides
  TestValidator.predicate(
    "exception",
    passes(() =>
      TestEquality.equals(
        "exception",
        { a: 1, id: 1 },
        { a: 1, id: 2 },
        (key) => key === "id",
      ),
    ),
  );

  // exception reaches an error's name too
  TestValidator.predicate(
    "exception on an error name",
    passes(() =>
      TestEquality.equals(
        "exception",
        new Error("a"),
        new TypeError("a"),
        (key) => key === "name",
      ),
    ),
  );

  // exception reaches set members too
  TestValidator.predicate(
    "exception inside a set",
    passes(() =>
      TestEquality.equals(
        "exception",
        new Set([{ id: 1, a: 1 }]),
        new Set([{ id: 2, a: 1 }]),
        (key) => key === "id",
      ),
    ),
  );

  // subset checks only the object keys the expected value declares
  const subset = (expected: unknown, actual: unknown): boolean =>
    passes(() => TestEquality.subset("subset", expected, actual));
  TestValidator.predicate("subset extra key", subset({ a: 1 }, { a: 1, b: 2 }));
  TestValidator.predicate(
    "subset nested extra key",
    subset({ a: { b: 1 } }, { a: { b: 1, c: 2 } }),
  );
  TestValidator.predicate(
    "subset missing key",
    subset({ a: 1, b: 2 }, { a: 1 }) === false,
  );
  TestValidator.predicate(
    "subset wrong value",
    subset({ a: 1 }, { a: 2, b: 2 }) === false,
  );
  TestValidator.predicate(
    "subset array length",
    subset({ a: [1] }, { a: [1, 2] }) === false,
  );
  TestValidator.predicate(
    "subset array element keys",
    subset([{ a: 1 }], [{ a: 1, b: 2 }]),
  );
  TestValidator.predicate(
    "subset map entries",
    subset(
      new Map([["a", 1]]),
      new Map([
        ["a", 1],
        ["b", 2],
      ]),
    ) === false,
  );
  TestValidator.predicate(
    "subset set members",
    subset(new Set([1]), new Set([1, 2])) === false,
  );
  TestValidator.predicate(
    "subset date",
    subset({ at: date("2026-01-01") }, { at: date("2026-01-02") }) === false,
  );

  // difference names every differing path
  TestEquality.equals(
    "difference",
    TestEquality.difference(
      { a: { b: [1, 2] }, c: new Map([["k", 1]]), d: 1 },
      { a: { b: [1, 3] }, c: new Map([["k", 2]]), e: 1 },
    ),
    [".a.b[1]", '.c.get("k")', ".d", ".e"],
  );
  TestEquality.equals(
    "no difference",
    TestEquality.difference({ a: [1] }, { a: [1] }),
    [],
  );

  // the failure names the title and the path
  const message: string | null = (() => {
    try {
      TestEquality.equals("titled", { a: 1n }, { a: 2n });
      return null;
    } catch (error) {
      return (error as Error).message;
    }
  })();
  TestValidator.predicate(
    "failure message",
    message !== null &&
      message.startsWith("Bug on titled: found different values - [.a]:"),
  );
};

const same_function = (): number => 1;

/** An object that holds itself, carrying `value`. */
const cycle = (value: number): object => {
  const output: Record<string, unknown> = { value };
  output.self = output;
  return output;
};

/** A set holding an object that holds the set, carrying `value`. */
const set_cycle = (value: number): object => {
  const output: Record<string, unknown> = { value };
  output.set = new Set([output]);
  return output;
};

/** A view whose `Symbol.toStringTag` claims a plain object. */
const tagged_view = (bytes: number[]): DataView => {
  const view: DataView = new DataView(new Uint8Array(bytes).buffer);
  Object.defineProperty(view, Symbol.toStringTag, { value: "Object" });
  return view;
};

/** An error carrying a report field, as `TypeGuardError` does. */
const error_with = (path: string): Error =>
  Object.assign(new Error("invalid"), { path });

const passes = (task: () => void): boolean => {
  try {
    task();
    return true;
  } catch {
    return false;
  }
};
