import { Resolved } from "typia";

export const resolved_equal_to =
  (name: string) =>
  <Instance>(
    x: Instance | Resolved<Instance>,
    y: Instance | Resolved<Instance>,
    tracer?: { value?: string },
  ): boolean => {
    if (name.indexOf("Class") !== -1) return true;
    else if (typeof x === "function" || typeof y === "function") return true;
    return recursive_equal_to(x, y, "$input", tracer);
  };

function object_equal_to<T extends object>(
  x: T,
  y: T,
  path: string,
  tracer?: { value?: string },
): boolean {
  return Object.entries(x).every(([key, value]) => {
    return recursive_equal_to(value, (y as any)[key], `${path}.${key}`, tracer);
  });
}

function array_equal_to<T>(
  x: T[],
  y: T[],
  path: string,
  tracer?: { value?: string },
): boolean {
  if (x.length !== y.length)
    return trace(x.length, y.length, `${path}.length`, tracer);
  return x.every((value, index) => {
    return recursive_equal_to(value, y[index], `${path}[${index}]`, tracer);
  });
}

function recursive_equal_to<T>(
  x: T,
  y: T,
  path: string,
  tracer?: { value?: string },
): boolean {
  const optional = (opposite: any) =>
    opposite === undefined ||
    opposite === null ||
    (Array.isArray(opposite) && opposite.length === 0) ||
    (opposite instanceof Map && opposite.size === 0);
  if ((x === undefined || x === null) && optional(y)) return true;
  else if ((y === undefined || y === null) && optional(x)) return true;
  else if (typeof x !== typeof y) return trace(x, y, path, tracer);
  else if (typeof x === "object")
    if (x === null) return trace(x, y, path, tracer);
    else if (x instanceof Date)
      return trace(x.getTime(), (y as any)?.getTime?.(), path, tracer);
    else if (
      x instanceof Array ||
      x instanceof Uint8Array ||
      x instanceof Uint8ClampedArray ||
      x instanceof Uint16Array ||
      x instanceof Uint32Array ||
      x instanceof BigUint64Array ||
      x instanceof Int8Array ||
      x instanceof Int16Array ||
      x instanceof Int32Array ||
      x instanceof BigInt64Array ||
      x instanceof Float32Array ||
      x instanceof Float64Array
    )
      return array_equal_to(x as any, y as any, path, tracer);
    else if (x instanceof ArrayBuffer || x instanceof SharedArrayBuffer)
      return recursive_equal_to(
        x.byteLength,
        (y as any)?.byteLength,
        `${path}.byteLength`,
        tracer,
      );
    else if (x instanceof DataView)
      return recursive_equal_to(
        x.buffer.byteLength,
        (y as any)?.buffer?.byteLength,
        `${path}.buffer.byteLength`,
        tracer,
      );
    else if (x instanceof Set)
      return array_equal_to([...x], [...(y as any)], path, tracer);
    else if (x instanceof Map)
      return array_equal_to([...x], [...(y as any)], path, tracer);
    else
      return object_equal_to(
        (<any>x) as object,
        (<any>y) as object,
        path,
        tracer,
      );
  else if (typeof x === "number" && typeof y === "number") {
    const gap = Math.abs(x - y) / Math.abs(x);
    if (gap < 0.001) return true;
    return trace(x, y, path, tracer);
  } else return trace(x, y, path, tracer);
}

function trace(
  x: any,
  y: any,
  path: string,
  tracer?: { value?: string },
): boolean {
  if (x !== y) {
    console.log({ x, y, path, typeofX: typeof x, typeofY: typeof y });
    if (tracer) tracer.value = path;
  }
  return x === y;
}
