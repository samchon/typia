import { Resolved } from "../Resolved";

export const _miscCloneAny = <T>(value: T): Resolved<T> =>
  cloneMain(value) as Resolved<T>;

const cloneMain = (value: any): any => {
  if (value === undefined) return undefined;
  else if (typeof value === "object")
    if (value === null) return null;
    else if (Array.isArray(value)) return value.map(cloneMain);
    else if (value instanceof Date) return new Date(value);
    else if (value instanceof Uint8Array) return new Uint8Array(value);
    else if (value instanceof Uint8ClampedArray)
      return new Uint8ClampedArray(value);
    else if (value instanceof Uint16Array) return new Uint16Array(value);
    else if (value instanceof Uint32Array) return new Uint32Array(value);
    else if (value instanceof BigUint64Array) return new BigUint64Array(value);
    else if (value instanceof Int8Array) return new Int8Array(value);
    else if (value instanceof Int16Array) return new Int16Array(value);
    else if (value instanceof Int32Array) return new Int32Array(value);
    else if (value instanceof BigInt64Array) return new BigInt64Array(value);
    else if (value instanceof Float32Array) return new Float32Array(value);
    else if (value instanceof Float64Array) return new Float64Array(value);
    else if (value instanceof ArrayBuffer) return value.slice(0);
    else if (value instanceof SharedArrayBuffer) return value.slice(0);
    else if (value instanceof DataView)
      return new DataView(value.buffer.slice(0));
    else if (typeof File !== "undefined" && value instanceof File)
      return new File([value], value.name, { type: value.type });
    else if (typeof Blob !== "undefined" && value instanceof Blob)
      return new Blob([value], { type: value.type });
    else if (value instanceof Set) return new Set([...value].map(cloneMain));
    else if (value instanceof Map)
      return new Map([...value].map(([k, v]) => [cloneMain(k), cloneMain(v)]));
    else if (value instanceof WeakSet || value instanceof WeakMap)
      throw new Error("WeakSet and WeakMap are not supported");
    else if (value.valueOf() !== value) return cloneMain(value.valueOf());
    else
      return Object.fromEntries(
        Object.entries(value)
          .map(([k, v]) => [k, cloneMain(v)])
          .filter(([, v]) => v !== undefined),
      );
  else if (typeof value === "function") return undefined;
  return value;
};
