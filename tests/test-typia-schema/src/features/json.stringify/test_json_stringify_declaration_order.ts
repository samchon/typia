import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

interface IPositions {
  a: number;
  b?: number;
  c: number;
  d?: number;
  e: number;
}
interface ITrailing {
  a: number;
  b?: number;
}
interface IAllOptional {
  a?: number;
  b?: string;
  c?: boolean;
}
interface IAny {
  head: string;
  loose: any;
  tail: string;
}
interface IDynamic {
  fixed: number;
  maybe?: string;
  [key: `x-${string}`]: unknown;
}
interface INested {
  head: string;
  inner: { p: number; q?: number; r: number };
  list: Array<{ s?: string; t: number }>;
  tuple: [{ u?: boolean; v: number }, string];
  tail: string;
}
interface IExotic {
  date: string & tags.Format<"date-time">;
  optional?: number;
  nullable: string | null;
  nested: { list: Array<{ deep: boolean } | null> };
  index: Record<string, number | null>;
  tuple: [string, ...number[]];
  literal: "a" | "b" | 3 | true;
  union: { kind: "x"; x: number } | { kind: "y"; y: string[] };
}

/**
 * Verifies json.stringify emits members in declaration order.
 *
 * The emitter sorted every omissible member — optional, `any`-typed, or
 * function-typed — ahead of the required ones, so `{ a, b?, c, d?, e }`
 * serialized as `{"b","d","a","c","e"}`. The guide promises the opposite twice:
 * output "identical to `JSON.stringify`" and members "in the order your type
 * declares". A caller computing an ETag, a signature, or a golden file over the
 * text saw a different string from the one `JSON.stringify` produces for the
 * same value (#2295).
 *
 * The sort existed because the separator is appended to every entry but the
 * last, so a last member that drops at runtime would leave a trailing comma;
 * `_jsonStringifyTail` already repairs that, which is why the absent cases
 * below are as important as the present ones.
 *
 * `JSON.stringify` over a value assigned in declaration order is the oracle, so
 * no expectation here is read from typia's own output.
 *
 * 1. Serialize optional members declared before, between and after required ones,
 *    present and absent.
 * 2. Repeat for all-optional, `any`-typed, dynamic-keyed and nested shapes, and
 *    for every stringify flavor and factory.
 * 3. Require each result to equal `JSON.stringify` of the same value and to parse.
 *
 * @evidence contracts/testing.md#behavioral-verification Generated stringify preserves property order and valid JSON for optional and nested shapes.
 * @evidence contracts/testing.md#independent-expectations Exact native JSON.stringify strings anchor order; parsing generated strings detects malformed JSON. Sixteen random exotic samples use the platform oracle without claiming distribution correctness.
 * @evidence contracts/testing.md#distinguishing-cases Present/absent optional positions, all-optional objects, any/undefined/null, dynamic keys and nested arrays/tuples remain across raw/assert/is/validate direct forms and createStringify.
 * @evidence contracts/testing.md#execution-ownership The schema start runner discovers test_json_stringify_declaration_order through DynamicExecutor and ttsx with the native typia plugin; its exported body owns the assertions.
 * @evidence contracts/e2e.md#necessary-boundary The native serializer must assemble separators and declaration-order keys across optional and dynamic emission branches.
 * @evidence contracts/e2e.md#shared-execution The case reuses the suite project load and native plugin artifact. Its inputs do not build or launch a separate host.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Inputs and generated results are local to the case. The suite owns the shared host lifetime; no cold cache transition is asserted.
 * @evidence contracts/e2e.md#preserved-coverage Present/absent optional positions, all-optional objects, any/undefined/null, dynamic keys and nested arrays/tuples remain across raw/assert/is/validate direct forms and createStringify. Original inputs and assertions remain; source review and final execution are reported separately.
 */
export const test_json_stringify_declaration_order = (): void => {
  const same = (title: string, mine: string, value: unknown): void => {
    TestEquality.equals(title, mine, JSON.stringify(value));
    JSON.parse(mine); // throws when a separator was left behind
  };

  // POSITIVE: an optional member in the middle keeps its declared place.
  const full: IPositions = { a: 1, b: 2, c: 3, d: 4, e: 5 };
  same("optional middle", typia.json.stringify<IPositions>(full), full);

  // NEGATIVE TWIN: the same type with those members absent.
  const sparse: IPositions = { a: 1, c: 3, e: 5 };
  same("optional absent", typia.json.stringify<IPositions>(sparse), sparse);

  // BOUNDARY: the last member is the omissible one, present and absent.
  const trailing: ITrailing = { a: 1, b: 2 };
  same(
    "optional last present",
    typia.json.stringify<ITrailing>(trailing),
    trailing,
  );
  const dropped: ITrailing = { a: 1 };
  same(
    "optional last absent",
    typia.json.stringify<ITrailing>(dropped),
    dropped,
  );

  // BOUNDARY: every member omissible, including the empty object.
  for (const value of [
    { a: 1, b: "x", c: true },
    { b: "x" },
    { c: false },
    {},
  ] as IAllOptional[])
    same(
      `all optional ${JSON.stringify(value)}`,
      typia.json.stringify<IAllOptional>(value),
      value,
    );

  // An `any` member is omissible for a different reason — its value may
  // serialize to `undefined` — and sorted with the optional ones.
  for (const value of [
    { head: "h", loose: 1, tail: "t" },
    { head: "h", loose: undefined, tail: "t" },
    { head: "h", loose: null, tail: "t" },
  ] as IAny[])
    same(
      `any member ${String(value.loose)}`,
      typia.json.stringify<IAny>(value),
      value,
    );

  // Dynamic members follow the static ones, which must keep their order.
  const dynamic: IDynamic = { fixed: 1, maybe: "m", "x-a": 2 } as IDynamic;
  same(
    "dynamic beside optional",
    typia.json.stringify<IDynamic>(dynamic),
    dynamic,
  );

  // Nested objects, array elements and tuple members carry the same rule.
  const nested: INested = {
    head: "h",
    inner: { p: 1, q: 2, r: 3 },
    list: [{ s: "s", t: 1 }, { t: 2 }],
    tuple: [{ u: true, v: 1 }, "z"],
    tail: "t",
  };
  same("nested shapes", typia.json.stringify<INested>(nested), nested);

  // Every flavor shares the emitter.
  same("assertStringify", typia.json.assertStringify<IPositions>(full), full);
  same("isStringify", typia.json.isStringify<IPositions>(full)!, full);
  const validated = typia.json.validateStringify<IPositions>(full);
  same(
    "validateStringify",
    validated.success ? (validated.data as unknown as string) : "",
    full,
  );
  same("createStringify", typia.json.createStringify<IPositions>()(full), full);

  // A tagged, unioned, recursive-ish shape drawn at random.
  for (let i: number = 0; i < 16; ++i) {
    const value: IExotic = typia.random<IExotic>();
    same(`random exotic #${i}`, typia.json.stringify<IExotic>(value), value);
  }
};
