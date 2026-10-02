import { OpenApiValidator } from "@typia/utils";
import assert from "node:assert/strict";
import { _isUniqueItems } from "typia/lib/internal/_isUniqueItems";

/**
 * Verifies native equality categories in both operand orders.
 *
 * @evidence contracts/testing.md#behavioral-verification The runtime uniqueness helper and public OpenAPI array validator reject same-kind duplicates and accept native/plain and distinct-kind pairs in both orders. Blob/File pairs specifically distinguish their inheritance boundary.
 * @evidence contracts/testing.md#independent-expectations Authored native constructors define distinct categories, and separately constructed equal values define duplicates. Literal booleans establish expectations; neither implementation computes an oracle for the other.
 * @evidence contracts/testing.md#distinguishing-cases Builtin containers, wrappers, views, all available typed arrays, Buffer, Blob and File are compared to plain objects with identical enumerable keys. Cross-kind pairs and same-kind twins preserve native distinctions, while ordinary class/plain twins preserve structural equality. Platform constructors are exercised when present.
 * @evidence contracts/testing.md#execution-ownership The plugin-free test-utils runner registers this exported unit. It calls portable runtime helpers and the public schema validator without transforming a fixture or mutating platform state.
 */
export const test_unique_items_native_kind_symmetry = (): void => {
  const factories: [string, () => object][] = [
    ["Set", () => new Set([1])],
    ["Map", () => new Map([[1, 2]])],
    ["Boolean", () => new Boolean(true)],
    ["Number", () => new Number(1)],
    ["String", () => new String("x")],
    ["BigInt", () => Object(1n)],
    ["Symbol", () => Object(Symbol.for("unique-items-unit"))],
    ["Date", () => new Date(1)],
    ["RegExp", () => /x/g],
    ["DataView", () => new DataView(new Uint8Array([1]).buffer)],
    ["ArrayBuffer", () => new Uint8Array([1]).buffer],
  ];
  if (typeof SharedArrayBuffer !== "undefined")
    factories.push(["SharedArrayBuffer", () => new SharedArrayBuffer(1)]);
  if (typeof Blob !== "undefined")
    factories.push(["Blob", () => new Blob(["x"], { type: "text/plain" })]);
  if (typeof File !== "undefined")
    factories.push([
      "File",
      () => new File(["x"], "x", { type: "text/plain", lastModified: 1 }),
    ]);
  for (const name of [
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
  ])
    if (typeof (globalThis as any)[name] === "function")
      factories.push([name, () => new (globalThis as any)[name](1)]);
  factories.push(["Buffer", () => Buffer.from([1])]);
  const check = (label: string, input: unknown[], expected: boolean): void => {
    assert.equal(_isUniqueItems(input), expected, `typia ${label}`);
    assert.equal(
      OpenApiValidator.validate({
        components: {},
        schema: { type: "array", items: {}, uniqueItems: true },
        required: true,
        value: input,
      }).success,
      expected,
      `utils ${label}`,
    );
  };
  for (const [name, factory] of factories) {
    const value = factory();
    const plain = Object.fromEntries(
      Reflect.ownKeys(value)
        .filter((key) => Object.prototype.propertyIsEnumerable.call(value, key))
        .map((key) => [key, (value as any)[key]]),
    );
    check(`${name}/plain`, [value, plain], true);
    check(`plain/${name}`, [plain, value], true);
    check(`${name}/duplicate`, [value, factory()], false);
  }
  for (let i = 0; i < factories.length; ++i)
    for (let j = i + 1; j < factories.length; ++j) {
      const [a, makeA] = factories[i]!;
      const [b, makeB] = factories[j]!;
      check(`${a}/${b}`, [makeA(), makeB()], true);
      check(`${b}/${a}`, [makeB(), makeA()], true);
    }
  class RecordValue {
    constructor(public id: number) {}
  }
  check("class/plain", [new RecordValue(1), { id: 1 }], false);
  check("plain/class", [{ id: 1 }, new RecordValue(1)], false);
  check("distinct class/plain", [new RecordValue(1), { id: 2 }], true);
  check("empty", [], true);
  check("singleton", [new Set()], true);
  check("NaN", [NaN, NaN], true);
  check("strict primitive", [1, "1"], true);
  check("signed zero", [0, -0], false);
  if (typeof Blob !== "undefined")
    check("distinct Blob", [new Blob(["x"]), new Blob(["xx"])], true);
  if (typeof File !== "undefined")
    check(
      "distinct File",
      [
        new File(["x"], "a", { lastModified: 1 }),
        new File(["x"], "b", { lastModified: 1 }),
      ],
      true,
    );
};
