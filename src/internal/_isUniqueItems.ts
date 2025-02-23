export const _isUniqueItems = (elements: any[]): boolean => {
  // EMPTY OR ONLY ONE
  if (elements.length < 2) return true;

  // SHALLOW COMPARISON
  if (["boolean", "bigint", "number", "string"].includes(typeof elements[0]))
    return new Set(elements).size === elements.length;

  // DEEP COMPARISON
  for (let i = 0; i < elements.length; i++)
    for (let j = i + 1; j < elements.length; j++)
      if (equals(new WeakMap())(elements[i], elements[j])) return false;
  return true;
};

const equals = (visited: WeakMap<object, WeakMap<object, boolean>>) => {
  const next = (a: any, b: any): boolean => {
    // SHALLOW EQUAL
    if (a === b) return true;
    else if (typeof a !== typeof b || typeof a !== "object") return false;
    // COMPARE CONTAINERS
    else if (Array.isArray(a))
      return Array.isArray(b) && a.map((x, i) => next(x, b[i])).every((x) => x);
    else if (a instanceof Set)
      return (
        b instanceof Set && a.size === b.size && [...a].every((x) => b.has(x))
      );
    else if (a instanceof Map)
      return (
        b instanceof Map &&
        a.size === b.size &&
        [...a].every(([k, v]) => b.has(k) && next(v, b.get(k)))
      );
    // ATOMIC CLASSES
    else if (a instanceof Boolean)
      return b instanceof Boolean
        ? a.valueOf() === b.valueOf()
        : a.valueOf() === b;
    else if (a instanceof BigInt)
      return b instanceof BigInt ? a === b : a === BigInt(b);
    else if (a instanceof Number)
      return b instanceof Number
        ? a.valueOf() === b.valueOf()
        : a.valueOf() === b;
    else if (a instanceof String)
      return b instanceof String
        ? a.valueOf() === b.valueOf()
        : a.valueOf() === b;
    else if (a instanceof Date)
      return b instanceof Date && a.getTime() === b.getTime();
    // BINARY DATA
    else if (a instanceof Uint8Array)
      return (
        b instanceof Uint8Array &&
        a.length === b.length &&
        a.every((x, i) => x === b[i])
      );
    else if (a instanceof Uint8ClampedArray)
      return (
        b instanceof Uint8ClampedArray &&
        a.length === b.length &&
        a.every((x, i) => x === b[i])
      );
    else if (a instanceof Uint16Array)
      return (
        b instanceof Uint16Array &&
        a.length === b.length &&
        a.every((x, i) => x === b[i])
      );
    else if (a instanceof Uint32Array)
      return (
        b instanceof Uint32Array &&
        a.length === b.length &&
        a.every((x, i) => x === b[i])
      );
    else if (a instanceof BigUint64Array)
      return (
        b instanceof BigUint64Array &&
        a.length === b.length &&
        a.every((x, i) => x === b[i])
      );
    else if (a instanceof Int8Array)
      return (
        b instanceof Int8Array &&
        a.length === b.length &&
        a.every((x, i) => x === b[i])
      );
    else if (a instanceof Int16Array)
      return (
        b instanceof Int16Array &&
        a.length === b.length &&
        a.every((x, i) => x === b[i])
      );
    else if (a instanceof Int32Array)
      return (
        b instanceof Int32Array &&
        a.length === b.length &&
        a.every((x, i) => x === b[i])
      );
    else if (a instanceof BigInt64Array)
      return (
        b instanceof BigInt64Array &&
        a.length === b.length &&
        a.every((x, i) => x === b[i])
      );
    else if (a instanceof Float32Array)
      return (
        b instanceof Float32Array &&
        a.length === b.length &&
        a.every((x, i) => x === b[i])
      );
    else if (a instanceof Float64Array)
      return (
        b instanceof Float64Array &&
        a.length === b.length &&
        a.every((x, i) => x === b[i])
      );
    else if (a instanceof ArrayBuffer) {
      if (!(b instanceof ArrayBuffer) || a.byteLength !== b.byteLength)
        return false;
      const x: Uint8Array = new Uint8Array(a);
      const y: Uint8Array = new Uint8Array(b);
      return x.every((v, i) => v === y[i]);
    } else if (a instanceof SharedArrayBuffer) {
      if (!(b instanceof SharedArrayBuffer) || a.byteLength !== b.byteLength)
        return false;
      const x: Uint8Array = new Uint8Array(a);
      const y: Uint8Array = new Uint8Array(b);
      return x.every((v, i) => v === y[i]);
    } else if (a instanceof DataView) {
      if (!(b instanceof DataView) || a.byteLength !== b.byteLength)
        return false;
      const x: Uint8Array = new Uint8Array(a.buffer);
      const y: Uint8Array = new Uint8Array(b.buffer);
      return x.every((v, i) => v === y[i]);
    } else if (a instanceof File)
      return (
        b instanceof File &&
        a.name === b.name &&
        a.size === b.size &&
        a.type === b.type &&
        next(a.slice(), b.slice())
      );
    // JUST PLAIN OBJECTS
    else if (a !== null && b !== null) {
      if (visited.has(a) && visited.get(a)!.has(b))
        return visited.get(a)!.get(b)!;
      if (!visited.has(a)) visited.set(a, new WeakMap());
      visited.get(a)!.set(b, true);
      const res: boolean =
        Object.keys(a).length === Object.keys(b).length &&
        Object.keys(a).every((x) => next(a[x], b[x]));
      visited.get(a)!.set(b, res);
      return res;
    }
    return false;
  };
  return next;
};
