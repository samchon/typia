import { _notationAssign } from "./_notationAssign";

/**
 * Build a function that renames the keys of an untyped value.
 *
 * Plain objects and arrays are walked, dates are copied, typed arrays and data
 * views are passed through and boxed primitives are unwrapped. Maps and sets
 * lose their container entries; other class instances retain only enumerable
 * own string properties as plain objects. Functions pass through unchanged.
 * Cycles are not tracked, and property getters and rename callbacks may throw.
 *
 * @evidence contracts/common.md#principled-implementation The returned walker renames the keys of plain objects and arrays recursively with the given function, copies dates, passes typed arrays and data views through, and unwraps boxed primitives, so notation conversion over an `any` value applies to its JSON-like content. Maps and sets lose their container entries because the fallback walks only enumerable own string properties; class instances become plain objects containing those converted properties. Functions pass through unchanged, and cycles are not tracked.
 * @evidence contracts/common.md#clear-and-simple-design One closure over the rename function with a main walker and an object walker; key assignment and collision checks are shared helpers.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Collisions are reported by the shared helper and not resolved silently.
 * @evidence contracts/common.md#meaningful-documentation Native prose distinguishes retained properties from container entries, function pass-through, absent cycle tracking and observable getter/callback failures.
 */
export const _notationAny = (rename: (str: string) => string) => {
  const main = (input: any): any => {
    if (typeof input === "object")
      if (input === null) return null;
      else if (Array.isArray(input)) return input.map(main);
      else if (
        input instanceof Boolean ||
        input instanceof BigInt ||
        input instanceof Number ||
        input instanceof String
      )
        return input.valueOf();
      else if (input instanceof Date) return new Date(input);
      else if (
        input instanceof Uint8Array ||
        input instanceof Uint8ClampedArray ||
        input instanceof Uint16Array ||
        input instanceof Uint32Array ||
        input instanceof BigUint64Array ||
        input instanceof Int8Array ||
        input instanceof Int16Array ||
        input instanceof Int32Array ||
        input instanceof BigInt64Array ||
        input instanceof Float32Array ||
        input instanceof Float64Array ||
        input instanceof DataView
      )
        return input;
      else return object(input);
    return input;
  };
  const object = (input: Record<string, any>) => {
    const output: Record<string, any> = {};
    const sources: Record<string, string> = Object.create(null);
    for (const [key, value] of Object.entries(input))
      _notationAssign(output, sources, key, main(value), rename);
    return output;
  };
  return main;
};
