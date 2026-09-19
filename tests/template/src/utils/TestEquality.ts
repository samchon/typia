/**
 * Structural equality for typia's test suites.
 *
 * `TestValidator.equals` from `@nestia/e2e` walks only the keys of its first
 * argument and sees no content in `Date`, `Map`, `Set`, or any other object
 * without enumerable own keys, so it accepts a dropped key, two different
 * dates, and two different maps alike (samchon/typia#2401). This oracle makes
 * the intent explicit instead:
 *
 * - {@link TestEquality.equals} is symmetric: both values must hold the same data.
 * - {@link TestEquality.subset} checks only what the expected value declares, for
 *   assertions that pin some fields of a larger result on purpose.
 *
 * Both compare `Date` by time, `Map` by entries, and `Set` by members, and
 * treat `NaN` as equal to `NaN`. Both keep these rules of
 * `TestValidator.equals`, which many schema and controller assertions rely on:
 *
 * - A key whose value is `undefined` on both sides, or absent on one side and
 *   `undefined` on the other, is ignored, as in JSON.
 * - A key holding a function on either side is ignored, because functions are
 *   behavior rather than data.
 * - Prototypes are not compared; assert identity with `===` instead.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace TestEquality {
  /**
   * Asserts two values hold the same data.
   *
   * @param title Assertion title, reported on failure
   * @param x First value
   * @param y Second value
   * @param exception Predicate on property keys to ignore
   */
  export function equals<X, Y extends X = X>(
    title: string,
    x: X,
    y: Y | null | undefined,
    exception?: (key: string) => boolean,
  ): void {
    report(title, difference(x, y, exception), x, y);
  }

  /**
   * Asserts the actual value matches every field the expected value declares.
   *
   * Object keys the expected value does not declare are not checked, at any
   * depth. Array lengths, and the content of dates, maps, and sets, must still
   * match.
   *
   * @param title Assertion title, reported on failure
   * @param expected Fields the actual value must hold
   * @param actual Value under test
   * @param exception Predicate on property keys to ignore
   */
  export function subset<X, Y extends X = X>(
    title: string,
    expected: X,
    actual: Y | null | undefined,
    exception?: (key: string) => boolean,
  ): void {
    const output: string[] = [];
    compare(output, exception ?? (() => false), false, "", expected, actual);
    report(title, output, expected, actual);
  }

  /**
   * Lists the paths where two values differ, empty when they hold the same
   * data.
   *
   * @param x First value
   * @param y Second value
   * @param exception Predicate on property keys to ignore
   * @returns Differing paths, like `.a.b[0]`
   */
  export function difference(
    x: unknown,
    y: unknown,
    exception?: (key: string) => boolean,
  ): string[] {
    const output: string[] = [];
    compare(output, exception ?? (() => false), true, "", x, y);
    return output;
  }
}

const report = (
  title: string,
  diff: string[],
  x: unknown,
  y: unknown,
): void => {
  if (diff.length !== 0)
    throw new Error(
      [
        `Bug on ${title}: found different values - [${diff.join(", ")}]:`,
        "\n",
        stringify({ x, y }),
      ].join("\n"),
    );
};

/**
 * Compares `x` with `y`, recording differing paths. When `exact` is false,
 * object keys only `y` holds are not visited.
 */
const compare = (
  output: string[],
  exception: (key: string) => boolean,
  exact: boolean,
  path: string,
  x: unknown,
  y: unknown,
): void => {
  if (typeof x === "function" || typeof y === "function") return;
  if (x === y) return;
  if (typeof x === "number" && typeof y === "number") {
    if (Number.isNaN(x) && Number.isNaN(y)) return;
    output.push(path);
    return;
  }
  if (
    typeof x !== "object" ||
    typeof y !== "object" ||
    x === null ||
    y === null ||
    kind(x) !== kind(y)
  ) {
    output.push(path);
    return;
  }
  if (x instanceof Date) {
    const [a, b] = [x.getTime(), (y as Date).getTime()];
    if (a !== b && !(Number.isNaN(a) && Number.isNaN(b))) output.push(path);
  } else if (Array.isArray(x)) {
    const other: unknown[] = y as unknown[];
    if (x.length !== other.length) output.push(`${path}.length`);
    for (let i: number = 0; i < Math.max(x.length, other.length); ++i)
      compare(output, exception, exact, `${path}[${i}]`, x[i], other[i]);
  } else if (x instanceof Map) {
    const other: Map<unknown, unknown> = y as Map<unknown, unknown>;
    if (x.size !== other.size) output.push(`${path}.size`);
    for (const [key, value] of x)
      if (other.has(key) === false) output.push(`${path}.get(${label(key)})`);
      else
        compare(
          output,
          exception,
          exact,
          `${path}.get(${label(key)})`,
          value,
          other.get(key),
        );
    for (const key of other.keys())
      if (x.has(key) === false) output.push(`${path}.get(${label(key)})`);
  } else if (x instanceof Set) {
    const other: Set<unknown> = y as Set<unknown>;
    if (
      x.size !== other.size ||
      contains(x, other) === false ||
      contains(other, x) === false
    )
      output.push(path);
  } else {
    const a: Record<string, unknown> = x as Record<string, unknown>;
    const b: Record<string, unknown> = y as Record<string, unknown>;
    const keys: Set<string> = new Set(
      exact ? [...Object.keys(a), ...Object.keys(b)] : Object.keys(a),
    );
    for (const key of keys) {
      if (exception(key)) continue;
      if (a[key] === undefined && (exact === false || b[key] === undefined))
        continue;
      compare(output, exception, exact, `${path}.${key}`, a[key], b[key]);
    }
  }
};

/** Every member of `x` has an equal member in `y`. */
const contains = (x: Set<unknown>, y: Set<unknown>): boolean => {
  for (const value of x) {
    if (y.has(value)) continue;
    if (typeof value !== "object" || value === null) return false;
    let found: boolean = false;
    for (const candidate of y)
      if (TestEquality.difference(value, candidate).length === 0) {
        found = true;
        break;
      }
    if (found === false) return false;
  }
  return true;
};

/** The built-in kind an object's content is compared as. */
const kind = (value: object): string =>
  value instanceof Date
    ? "date"
    : Array.isArray(value)
      ? "array"
      : value instanceof Map
        ? "map"
        : value instanceof Set
          ? "set"
          : "object";

const label = (key: unknown): string =>
  typeof key === "string" ? JSON.stringify(key) : String(key);

/** JSON for failure messages that cannot itself throw. */
const stringify = (value: unknown): string => {
  const seen: WeakSet<object> = new WeakSet();
  try {
    return JSON.stringify(
      value,
      (_key, input: unknown) => {
        if (typeof input === "bigint") return `${input}n`;
        if (input instanceof Map) return { "<map>": [...input.entries()] };
        if (input instanceof Set) return { "<set>": [...input.values()] };
        if (typeof input === "object" && input !== null) {
          if (seen.has(input)) return "<circular>";
          seen.add(input);
        }
        return input;
      },
      2,
    );
  } catch {
    return String(value);
  }
};
