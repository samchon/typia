/**
 * Strict structural equivalence engine shared by the resolving oracles.
 *
 * `resolved_equal_to` and `protobuf_equal_to` each carried their own near-copy
 * of this walk, and the copies drifted: the Protocol Buffer one never grew a
 * `Date`, `Set`, or `ArrayBuffer` branch, so such a value fell through to the
 * object walk and compared equal to anything. One engine keeps the oracles from
 * diverging again.
 *
 * The walk is deliberately strict:
 *
 * - own enumerable keys are compared symmetrically, so an unexpected output
 *   property fails instead of hiding behind a one-sided traversal;
 * - a native compares its intrinsic brand rather than a realm-local constructor
 *   identity, so a `Uint16Array` never satisfies a `Uint8Array`;
 * - `ArrayBuffer`, `SharedArrayBuffer`, and `DataView` compare visible bytes,
 *   not only a byte length;
 * - functions compare by reference identity.
 *
 * The one deliberate looseness is inherited from the operations themselves: a
 * `null`, `undefined`, empty array, or empty `Map` on either side satisfies a
 * missing value, because the Protocol Buffer and HTTP encodings drop them.
 */
export interface IStrictEqualContext {
  /** Records the path of the first inequality, for the caller's diagnostics. */
  tracer?: { value?: string } | undefined;

  /**
   * Collects the `Blob` pairs whose bytes must be compared asynchronously.
   *
   * `Blob.arrayBuffer()` is asynchronous, so a synchronous oracle can only reach
   * a blob's metadata. Supplying this accumulator lets an asynchronous caller
   * finish the comparison through {@link strict_blobs_equal_to}.
   */
  blobs?: Array<[Blob, Blob, string]> | undefined;
}

export const strict_equal_to = (
  x: unknown,
  y: unknown,
  ctx: IStrictEqualContext,
): boolean => recursive_equal_to(x, y, "$input", ctx);

/**
 * Compares the byte content of every `Blob` pair the walk collected.
 */
export const strict_blobs_equal_to = async (
  ctx: IStrictEqualContext,
): Promise<boolean> => {
  for (const [x, y, path] of ctx.blobs ?? []) {
    const [bx, by] = await Promise.all([x.arrayBuffer(), y.arrayBuffer()]);
    if (
      bytes_equal_to(
        new Uint8Array(bx),
        new Uint8Array(by),
        `${path}.bytes`,
        ctx,
      ) === false
    )
      return false;
  }
  return true;
};

const NATIVE_BRANDS: ReadonlySet<string> = new Set([
  "[object Array]",
  "[object ArrayBuffer]",
  "[object BigInt64Array]",
  "[object BigUint64Array]",
  "[object DataView]",
  "[object Date]",
  "[object Float32Array]",
  "[object Float64Array]",
  "[object Int16Array]",
  "[object Int32Array]",
  "[object Int8Array]",
  "[object Map]",
  "[object RegExp]",
  "[object Set]",
  "[object SharedArrayBuffer]",
  "[object Uint16Array]",
  "[object Uint32Array]",
  "[object Uint8Array]",
  "[object Uint8ClampedArray]",
]);

const brand = (value: unknown): string => Object.prototype.toString.call(value);

function recursive_equal_to(
  x: unknown,
  y: unknown,
  path: string,
  ctx: IStrictEqualContext,
): boolean {
  const optional = (opposite: any) =>
    opposite === undefined ||
    opposite === null ||
    (Array.isArray(opposite) && opposite.length === 0) ||
    (opposite instanceof Map && opposite.size === 0);
  if ((x === undefined || x === null) && optional(y)) return true;
  else if ((y === undefined || y === null) && optional(x)) return true;
  else if (typeof x !== typeof y) return trace(x, y, path, ctx);
  else if (typeof x !== "object")
    // A FUNCTION FALLS THROUGH TO REFERENCE IDENTITY
    return typeof x === "number" && typeof y === "number"
      ? number_equal_to(x, y, path, ctx)
      : trace(x, y, path, ctx);
  else if (x === null) return trace(x, y, path, ctx);
  // A BLOB MAY MATERIALIZE AS A FILE, SO ITS BRAND IS RULED BY POLICY
  else if (x instanceof Blob)
    return y instanceof Blob
      ? blob_equal_to(x, y, path, ctx)
      : trace(brand(x), brand(y), path, ctx);
  else if (y instanceof Blob) return trace(brand(x), brand(y), path, ctx);
  // EVERY OTHER NATIVE MUST REPRODUCE ITS INTRINSIC BRAND EXACTLY
  else if (
    brand(x) !== brand(y) &&
    (NATIVE_BRANDS.has(brand(x)) || NATIVE_BRANDS.has(brand(y)))
  )
    return trace(brand(x), brand(y), path, ctx);
  else if (x instanceof Date)
    return trace(x.getTime(), (y as Date).getTime(), `${path}.getTime()`, ctx);
  else if (x instanceof RegExp)
    return (
      trace(x.source, (y as RegExp).source, `${path}.source`, ctx) &&
      trace(x.flags, (y as RegExp).flags, `${path}.flags`, ctx)
    );
  else if (Array.isArray(x)) return array_equal_to(x, y as any[], path, ctx);
  else if (ArrayBuffer.isView(x) && x instanceof DataView === false)
    return array_equal_to(x as any, y as any, path, ctx);
  else if (x instanceof ArrayBuffer || x instanceof SharedArrayBuffer)
    return bytes_equal_to(
      new Uint8Array(x),
      new Uint8Array(y as ArrayBufferLike),
      path,
      ctx,
    );
  else if (x instanceof DataView)
    return data_view_equal_to(x, y as DataView, path, ctx);
  else if (x instanceof Set)
    return array_equal_to([...x], [...(y as Set<any>)], path, ctx);
  else if (x instanceof Map)
    return array_equal_to([...x], [...(y as Map<any, any>)], path, ctx);
  else return object_equal_to(x as object, y as object, path, ctx);
}

function object_equal_to(
  x: object,
  y: object,
  path: string,
  ctx: IStrictEqualContext,
): boolean {
  // SYMMETRIC: AN UNEXPECTED OUTPUT KEY MUST FAIL, NOT HIDE
  const keys: Set<string> = new Set([...Object.keys(x), ...Object.keys(y)]);
  for (const key of keys)
    if (
      recursive_equal_to(
        (x as any)[key],
        (y as any)[key],
        `${path}.${key}`,
        ctx,
      ) === false
    )
      return false;
  return true;
}

function array_equal_to(
  x: ArrayLike<unknown>,
  y: ArrayLike<unknown>,
  path: string,
  ctx: IStrictEqualContext,
): boolean {
  if (x.length !== y.length)
    return trace(x.length, y.length, `${path}.length`, ctx);
  for (let i: number = 0; i < x.length; i++)
    if (recursive_equal_to(x[i], y[i], `${path}[${i}]`, ctx) === false)
      return false;
  return true;
}

function bytes_equal_to(
  x: Uint8Array,
  y: Uint8Array,
  path: string,
  ctx: IStrictEqualContext,
): boolean {
  if (x.byteLength !== y.byteLength)
    return trace(x.byteLength, y.byteLength, `${path}.byteLength`, ctx);
  for (let i: number = 0; i < x.byteLength; i++)
    if (x[i] !== y[i]) return trace(x[i], y[i], `${path}[${i}]`, ctx);
  return true;
}

function data_view_equal_to(
  x: DataView,
  y: DataView,
  path: string,
  ctx: IStrictEqualContext,
): boolean {
  // THE BACKING BRAND AND THE VISIBLE WINDOW ARE THE CONTRACT.
  //
  // The numeric `byteOffset` is not: `typia.plain.clone()` deliberately
  // normalizes a sliced view into a new exact-sized buffer at offset zero, so
  // requiring an equal offset would reject correct output.
  if (brand(x.buffer) !== brand(y.buffer))
    return trace(brand(x.buffer), brand(y.buffer), `${path}.buffer`, ctx);
  return bytes_equal_to(
    new Uint8Array(x.buffer, x.byteOffset, x.byteLength),
    new Uint8Array(y.buffer, y.byteOffset, y.byteLength),
    path,
    ctx,
  );
}

function blob_equal_to(
  x: Blob,
  y: Blob,
  path: string,
  ctx: IStrictEqualContext,
): boolean {
  // A `File` must stay a `File` and keep its metadata. A plain `Blob` may
  // materialize as a `File`, because that is what appending one to a standard
  // `FormData` does, so only its own contract is required back.
  if (x instanceof File) {
    if (y instanceof File === false) return trace(brand(x), brand(y), path, ctx);
    else if (
      trace(x.name, y.name, `${path}.name`, ctx) === false ||
      trace(x.lastModified, y.lastModified, `${path}.lastModified`, ctx) ===
        false
    )
      return false;
  }
  if (
    trace(x.size, y.size, `${path}.size`, ctx) === false ||
    trace(x.type, y.type, `${path}.type`, ctx) === false
  )
    return false;
  ctx.blobs?.push([x, y, path]);
  return true;
}

function number_equal_to(
  x: number,
  y: number,
  path: string,
  ctx: IStrictEqualContext,
): boolean {
  const gap: number = Math.abs(x - y) / Math.abs(x);
  if (gap < 0.001) return true;
  return trace(x, y, path, ctx);
}

function trace(
  x: any,
  y: any,
  path: string,
  ctx: IStrictEqualContext,
): boolean {
  if (x !== y) {
    console.log({ x, y, path, typeofX: typeof x, typeofY: typeof y });
    if (ctx.tracer) ctx.tracer.value = path;
  }
  return x === y;
}
