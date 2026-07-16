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

    const keys: string[] = Object.keys(a);
    return (
      keys.length === Object.keys(b).length &&
      keys.every(
        (key) =>
          Object.hasOwn(b, key) && next((a as any)[key], (b as any)[key]),
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
