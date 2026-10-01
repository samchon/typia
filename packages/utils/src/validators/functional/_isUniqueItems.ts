/**
 * Checks that no two elements of an array are equal.
 *
 * Primitives are compared with strict equality, so two `NaN` values are not
 * duplicates. Objects, arrays, maps, sets, dates, regular expressions, boxed
 * primitives, buffers and typed arrays are compared structurally, with cycles
 * tolerated. Every pair is compared, so the work grows quadratically with the
 * number of elements.
 *
 * @evidence contracts/common.md#principled-implementation Every pair of elements is compared with a structural equality that is strict for primitives, handles arrays, sets, maps, boxed primitives, dates, expressions, files, blobs and binary buffers and compares plain objects by own enumerable keys, with a pair table so cycles end. Sets and maps are matched without regard to order. The pairwise scan costs quadratic time in the number of elements, which is stated in the doc.
 * @evidence contracts/common.md#clear-and-simple-design One predicate over a private equality builder and a bytes helper, identical to the typia copy.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Equality rules are the documented ones and no element is special-cased.
 * @evidence contracts/common.md#meaningful-documentation A doc was added that states the equality rules, the cycle tolerance and the quadratic cost.
 */
export const _isUniqueItems = (elements: any[]): boolean => {
  for (let i = 0; i < elements.length; i++)
    for (let j = i + 1; j < elements.length; j++)
      if (equals(new WeakMap())(elements[i], elements[j])) return false;
  return true;
};

const equals = (visited: WeakMap<object, WeakMap<object, boolean>>) => {
  const next = (a: any, b: any): boolean => {
    if (a === b) return true;
    if (
      a === null ||
      b === null ||
      typeof a !== "object" ||
      typeof b !== "object"
    )
      return false;

    const previous: boolean | undefined = visited.get(a)?.get(b);
    if (previous !== undefined) return previous;
    const pairs: WeakMap<object, boolean> =
      visited.get(a) ?? new WeakMap<object, boolean>();
    visited.set(a, pairs);
    pairs.set(b, true);

    const result: boolean = compare(a, b);
    pairs.set(b, result);
    return result;
  };

  const compare = (a: object, b: object): boolean => {
    if (Array.isArray(a)) {
      if (!Array.isArray(b) || a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
        const aHas: boolean = Object.hasOwn(a, i);
        if (aHas !== Object.hasOwn(b, i) || (aHas && !next(a[i], b[i])))
          return false;
      }
      return true;
    }
    if (Array.isArray(b)) return false;

    if (a instanceof Set) {
      if (!(b instanceof Set) || a.size !== b.size) return false;
      const unmatched: any[] = [...b];
      for (const value of a) {
        const index: number = unmatched.findIndex((candidate) =>
          next(value, candidate),
        );
        if (index === -1) return false;
        unmatched.splice(index, 1);
      }
      return true;
    }
    if (a instanceof Map) {
      if (!(b instanceof Map) || a.size !== b.size) return false;
      const unmatched: [any, any][] = [...b];
      for (const [key, value] of a) {
        const index: number = unmatched.findIndex(
          ([candidateKey, candidateValue]) =>
            next(key, candidateKey) && next(value, candidateValue),
        );
        if (index === -1) return false;
        unmatched.splice(index, 1);
      }
      return true;
    }

    if (a instanceof Boolean)
      return b instanceof Boolean && a.valueOf() === b.valueOf();
    if (Object.prototype.toString.call(a) === "[object BigInt]")
      return (
        Object.prototype.toString.call(b) === "[object BigInt]" &&
        a.valueOf() === b.valueOf()
      );
    if (Object.prototype.toString.call(a) === "[object Symbol]")
      return (
        Object.prototype.toString.call(b) === "[object Symbol]" &&
        a.valueOf() === b.valueOf()
      );
    if (a instanceof Number)
      return b instanceof Number && a.valueOf() === b.valueOf();
    if (a instanceof String)
      return b instanceof String && a.valueOf() === b.valueOf();
    if (a instanceof Date)
      return b instanceof Date && a.getTime() === b.getTime();
    if (a instanceof RegExp)
      return (
        b instanceof RegExp && a.source === b.source && a.flags === b.flags
      );

    if (typeof File !== "undefined" && a instanceof File)
      return (
        b instanceof File &&
        a.name === b.name &&
        a.size === b.size &&
        a.type === b.type &&
        a.lastModified === b.lastModified
      );
    if (typeof Blob !== "undefined" && a instanceof Blob)
      return b instanceof Blob && a.size === b.size && a.type === b.type;

    if (a instanceof DataView) {
      if (!(b instanceof DataView) || a.byteLength !== b.byteLength)
        return false;
      return bytes(a.buffer, a.byteOffset, a.byteLength).every(
        (value, index) =>
          value === bytes(b.buffer, b.byteOffset, b.byteLength)[index],
      );
    }
    if (ArrayBuffer.isView(a)) {
      if (
        !ArrayBuffer.isView(b) ||
        b instanceof DataView ||
        Object.getPrototypeOf(a) !== Object.getPrototypeOf(b) ||
        a.byteLength !== b.byteLength
      )
        return false;
      const x: Uint8Array = bytes(a.buffer, a.byteOffset, a.byteLength);
      const y: Uint8Array = bytes(b.buffer, b.byteOffset, b.byteLength);
      return x.every((value, index) => value === y[index]);
    }
    if (a instanceof ArrayBuffer)
      return (
        b instanceof ArrayBuffer &&
        a.byteLength === b.byteLength &&
        bytes(a).every((value, index) => value === bytes(b)[index])
      );
    if (
      typeof SharedArrayBuffer !== "undefined" &&
      a instanceof SharedArrayBuffer
    )
      return (
        b instanceof SharedArrayBuffer &&
        a.byteLength === b.byteLength &&
        bytes(a).every((value, index) => value === bytes(b)[index])
      );

    const keys: PropertyKey[] = Reflect.ownKeys(a).filter((key) =>
      Object.prototype.propertyIsEnumerable.call(a, key),
    );
    return (
      keys.length ===
        Reflect.ownKeys(b).filter((key) =>
          Object.prototype.propertyIsEnumerable.call(b, key),
        ).length &&
      keys.every(
        (key) =>
          Object.prototype.propertyIsEnumerable.call(b, key) &&
          next((a as any)[key], (b as any)[key]),
      )
    );
  };
  return next;
};

const bytes = (
  buffer: ArrayBufferLike,
  byteOffset: number = 0,
  byteLength: number = buffer.byteLength,
): Uint8Array => new Uint8Array(buffer, byteOffset, byteLength);
