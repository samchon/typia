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
 * Both compare by content:
 *
 * - `Date` by time, and `RegExp` by source and flags;
 * - `Map` by entries, and `Set` by members, counting structurally equal members
 *   one to one;
 * - Typed arrays, `DataView`, and `ArrayBuffer` by their kind and bytes;
 * - An `Error` by name and message as well as its own fields;
 * - `NaN` as equal to `NaN`;
 * - Two objects of different built-in kinds as different, so a `Uint8Array` never
 *   equals a plain object. A kind is read from the value's internal slots, so
 *   an object that only inherits a built-in prototype, or only carries its
 *   `Symbol.toStringTag`, is a plain object.
 *
 * Both keep these rules of `TestValidator.equals`, which many schema and
 * controller assertions rely on:
 *
 * - An own key whose value is `undefined` on both sides, or absent on one side
 *   and `undefined` on the other, is ignored, as in JSON. A key only one side
 *   inherits counts as absent.
 * - An object key holding a function on either side is ignored, because such a
 *   member is behavior rather than data. Anywhere else, a function compares by
 *   identity.
 * - Prototypes are not compared; assert identity with `===` instead.
 *
 * A cycle, through sets included, compares as equal once the same pair of
 * objects is revisited.
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
  visiting: Map<object, Set<object>> = new Map(),
): void => {
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

  // A PAIR ALREADY ON THE STACK IS A CYCLE, EQUAL SO FAR
  const partners: Set<object> = visiting.get(x) ?? new Set();
  if (partners.has(y)) return;
  partners.add(y);
  visiting.set(x, partners);
  try {
    const next = (suffix: string, a: unknown, b: unknown): void =>
      compare(output, exception, exact, path + suffix, a, b, visiting);
    const type: string = kind(x);
    if (type === "Date") {
      const [a, b] = [(x as Date).getTime(), (y as Date).getTime()];
      if (a !== b && !(Number.isNaN(a) && Number.isNaN(b))) output.push(path);
    } else if (type === "RegExp") {
      next(".source", (x as RegExp).source, (y as RegExp).source);
      next(".flags", (x as RegExp).flags, (y as RegExp).flags);
    } else if (type === "Array") {
      const [a, b] = [x as unknown[], y as unknown[]];
      if (a.length !== b.length) output.push(`${path}.length`);
      for (let i: number = 0; i < Math.max(a.length, b.length); ++i)
        next(`[${i}]`, a[i], b[i]);
    } else if (BINARY.has(type)) {
      const [a, b] = [bytes(x), bytes(y)];
      if (a.length !== b.length || a.some((v, i) => v !== b[i]))
        output.push(path);
    } else if (type === "Map") {
      const [a, b] = [x as Map<unknown, unknown>, y as Map<unknown, unknown>];
      if (a.size !== b.size) output.push(`${path}.size`);
      for (const [key, value] of a)
        if (b.has(key) === false) output.push(`${path}.get(${label(key)})`);
        else next(`.get(${label(key)})`, value, b.get(key));
      for (const key of b.keys())
        if (a.has(key) === false) output.push(`${path}.get(${label(key)})`);
    } else if (type === "Set") {
      const members = (set: unknown): unknown[] => [...(set as Set<unknown>)];
      if (matches(members(x), members(y), exception, visiting) === false)
        output.push(path);
    } else {
      const a: Record<string, unknown> = x as Record<string, unknown>;
      const b: Record<string, unknown> = y as Record<string, unknown>;
      // AN ERROR KEEPS ITS NAME AND MESSAGE OFF THE ENUMERABLE KEYS
      if (type === "Error")
        for (const key of ["name", "message"])
          if (exception(key) === false) next(`.${key}`, a[key], b[key]);
      const keys: Set<string> = new Set(
        exact ? [...Object.keys(a), ...Object.keys(b)] : Object.keys(a),
      );
      for (const key of keys) {
        if (exception(key)) continue;
        const [va, vb] = [own(a, key), own(b, key)];
        if (typeof va === "function" || typeof vb === "function") continue;
        if (va === undefined && (exact === false || vb === undefined)) continue;
        next(`.${key}`, va, vb);
      }
    }
  } finally {
    partners.delete(y);
  }
};

/** Pairs every member of `x` with a distinct equal member of `y`. */
const matches = (
  x: unknown[],
  y: unknown[],
  exception: (key: string) => boolean,
  visiting: Map<object, Set<object>>,
): boolean => {
  if (x.length !== y.length) return false;
  const rest: unknown[] = [...y];
  for (const value of x) {
    const index: number = rest.findIndex((candidate) => {
      const output: string[] = [];
      compare(output, exception, true, "", value, candidate, visiting);
      return output.length === 0;
    });
    if (index === -1) return false;
    rest.splice(index, 1);
  }
  return true;
};

/** An own property, never one inherited from a prototype. */
const own = (record: Record<string, unknown>, key: string): unknown =>
  Object.prototype.hasOwnProperty.call(record, key) ? record[key] : undefined;

/**
 * The built-in kind an object's content is compared as.
 *
 * Read from the internal slots each kind's own methods check, not from
 * `instanceof` or `Symbol.toStringTag`: an object inheriting from
 * `Map.prototype` is no map, and a tagged view is still bytes.
 */
const kind = (value: object): string => {
  if (Array.isArray(value)) return "Array";
  if (ArrayBuffer.isView(value))
    return TYPED_ARRAY_TAG.call(value) ?? "DataView";
  for (const [name, probe] of PROBES) if (holds(probe, value)) return name;
  return isError(value) ? "Error" : "Object";
};

const holds = (probe: (value: object) => unknown, value: object): boolean => {
  try {
    probe(value);
    return true;
  } catch {
    return false;
  }
};

const getter = (prototype: object, key: string): ((this: unknown) => unknown) =>
  Object.getOwnPropertyDescriptor(prototype, key)!.get!;

const TYPED_ARRAY_TAG = getter(
  Object.getPrototypeOf(Int8Array.prototype),
  Symbol.toStringTag as unknown as string,
) as (this: unknown) => string | undefined;

const PROBES: Array<[string, (value: object) => unknown]> = [
  ["Date", (value) => Date.prototype.getTime.call(value)],
  ["RegExp", (value) => getter(RegExp.prototype, "source").call(value)],
  ["Map", (value) => Map.prototype.has.call(value, undefined)],
  ["Set", (value) => Set.prototype.has.call(value, undefined)],
  [
    "ArrayBuffer",
    (value) => getter(ArrayBuffer.prototype, "byteLength").call(value),
  ],
  [
    "SharedArrayBuffer",
    (value) => getter(SharedArrayBuffer.prototype, "byteLength").call(value),
  ],
];

const isError = (value: object): boolean => {
  const intrinsic = (Error as { isError?: (value: unknown) => boolean })
    .isError;
  return intrinsic !== undefined ? intrinsic(value) : value instanceof Error;
};

/** Kinds compared by their bytes. */
const BINARY: ReadonlySet<string> = new Set([
  "ArrayBuffer",
  "SharedArrayBuffer",
  "DataView",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Uint16Array",
  "Int32Array",
  "Uint32Array",
  "Float16Array",
  "Float32Array",
  "Float64Array",
  "BigInt64Array",
  "BigUint64Array",
]);

const bytes = (value: object): Uint8Array =>
  ArrayBuffer.isView(value)
    ? new Uint8Array(value.buffer, value.byteOffset, value.byteLength)
    : new Uint8Array(value as ArrayBufferLike);

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
