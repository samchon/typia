import { Resolved } from "@typia/interface";

export const _plainCloneAny = <T>(value: T): Resolved<T> =>
  cloneMain(value) as Resolved<T>;

const NOT_NATIVE = Symbol("not-native");
const objectToString = Object.prototype.toString;
const getter = (prototype: object, key: PropertyKey): (() => unknown) =>
  Object.getOwnPropertyDescriptor(prototype, key)!.get!;
const read = <T>(accessor: () => unknown, value: object): T =>
  Reflect.apply(accessor, value, []) as T;
const tryRead = <T>(
  accessor: (() => unknown) | undefined,
  value: object,
): { success: true; value: T } | { success: false } => {
  if (accessor === undefined) return { success: false };
  try {
    return { success: true, value: read<T>(accessor, value) };
  } catch {
    return { success: false };
  }
};

const arrayBufferByteLength = getter(ArrayBuffer.prototype, "byteLength");
const sharedArrayBufferByteLength =
  typeof SharedArrayBuffer === "undefined"
    ? undefined
    : getter(SharedArrayBuffer.prototype, "byteLength");
const dataViewBuffer = getter(DataView.prototype, "buffer");
const dataViewByteLength = getter(DataView.prototype, "byteLength");
const dataViewByteOffset = getter(DataView.prototype, "byteOffset");
const typedArrayName = getter(
  Object.getPrototypeOf(Uint8Array.prototype),
  Symbol.toStringTag,
);
const blobSize =
  typeof Blob === "undefined" ? undefined : getter(Blob.prototype, "size");
const blobType =
  typeof Blob === "undefined" ? undefined : getter(Blob.prototype, "type");
const fileName =
  typeof File === "undefined" ? undefined : getter(File.prototype, "name");
const fileLastModified =
  typeof File === "undefined"
    ? undefined
    : getter(File.prototype, "lastModified");
const regexpSource = getter(RegExp.prototype, "source");
const regexpFlags = getter(RegExp.prototype, "flags");

const nativeTag = (value: object): string | undefined => {
  let tagged: boolean;
  try {
    tagged = Symbol.toStringTag in value;
  } catch {
    return undefined;
  }
  if (!tagged)
    try {
      return objectToString.call(value);
    } catch {
      return undefined;
    }

  const date = tryRead<number>(Date.prototype.getTime, value);
  if (date.success) return "[object Date]";
  const typed = tryRead<string>(typedArrayName, value);
  if (typed.success && typed.value !== undefined)
    return `[object ${typed.value}]`;
  if (tryRead<number>(arrayBufferByteLength, value).success)
    return "[object ArrayBuffer]";
  if (tryRead<number>(sharedArrayBufferByteLength, value).success)
    return "[object SharedArrayBuffer]";
  if (tryRead<ArrayBufferLike>(dataViewBuffer, value).success)
    return "[object DataView]";
  if (tryRead<string>(fileName, value).success) return "[object File]";
  if (tryRead<number>(blobSize, value).success) return "[object Blob]";
  if (tryRead<string>(regexpSource, value).success) return "[object RegExp]";
  return undefined;
};

const cloneMain = (value: any): any => {
  if (value === undefined) return undefined;
  else if (typeof value === "object")
    if (value === null) return null;
    else if (Array.isArray(value)) return value.map(cloneMain);
    else {
      const native: any | typeof NOT_NATIVE = cloneNative(value);
      if (native !== NOT_NATIVE) return native;
      else if (value instanceof Set) return new Set([...value].map(cloneMain));
      else if (value instanceof Map)
        return new Map(
          [...value].map(([k, v]) => [cloneMain(k), cloneMain(v)]),
        );
      else if (value instanceof WeakSet || value instanceof WeakMap)
        throw new Error("WeakSet and WeakMap are not supported");
      else {
        const primitive: unknown = value.valueOf();
        if (primitive !== value) return cloneMain(primitive);
        return Object.fromEntries(
          Object.entries(value)
            .map(([k, v]) => [k, cloneMain(v)])
            .filter(([, v]) => v !== undefined),
        );
      }
    }
  else if (typeof value === "function") return undefined;
  return value;
};

const cloneNative = (value: object): any | typeof NOT_NATIVE => {
  const tag: string | undefined = nativeTag(value);
  switch (tag) {
    case "[object Date]": {
      const time = tryRead<number>(Date.prototype.getTime, value);
      return time.success ? new Date(time.value) : NOT_NATIVE;
    }
    case "[object Uint8Array]":
      return new Uint8Array(value as ArrayLike<number>);
    case "[object Uint8ClampedArray]":
      return new Uint8ClampedArray(value as ArrayLike<number>);
    case "[object Uint16Array]":
      return new Uint16Array(value as ArrayLike<number>);
    case "[object Uint32Array]":
      return new Uint32Array(value as ArrayLike<number>);
    case "[object BigUint64Array]":
      return new BigUint64Array(value as ArrayLike<bigint>);
    case "[object Int8Array]":
      return new Int8Array(value as ArrayLike<number>);
    case "[object Int16Array]":
      return new Int16Array(value as ArrayLike<number>);
    case "[object Int32Array]":
      return new Int32Array(value as ArrayLike<number>);
    case "[object BigInt64Array]":
      return new BigInt64Array(value as ArrayLike<bigint>);
    case "[object Float32Array]":
      return new Float32Array(value as ArrayLike<number>);
    case "[object Float64Array]":
      return new Float64Array(value as ArrayLike<number>);
    case "[object ArrayBuffer]": {
      const byteLength = tryRead<number>(arrayBufferByteLength, value);
      return byteLength.success
        ? cloneBufferRange(value as ArrayBuffer, 0, byteLength.value, false)
        : NOT_NATIVE;
    }
    case "[object SharedArrayBuffer]": {
      const byteLength = tryRead<number>(sharedArrayBufferByteLength, value);
      return byteLength.success
        ? cloneBufferRange(
            value as SharedArrayBuffer,
            0,
            byteLength.value,
            true,
          )
        : NOT_NATIVE;
    }
    case "[object DataView]": {
      const buffer = tryRead<ArrayBufferLike>(dataViewBuffer, value);
      if (!buffer.success) return NOT_NATIVE;
      const byteOffset: number = read(dataViewByteOffset, value);
      const byteLength: number = read(dataViewByteLength, value);
      return new DataView(
        cloneBufferRange(buffer.value, byteOffset, byteLength),
      );
    }
    case "[object File]": {
      const size = tryRead<number>(blobSize, value);
      if (
        typeof File === "undefined" ||
        !size.success ||
        blobType === undefined ||
        fileName === undefined ||
        fileLastModified === undefined
      )
        return NOT_NATIVE;
      return new File([value as Blob], read<string>(fileName, value), {
        type: read<string>(blobType, value),
        lastModified: read<number>(fileLastModified, value),
      });
    }
    case "[object Blob]": {
      const size = tryRead<number>(blobSize, value);
      if (
        typeof Blob === "undefined" ||
        !size.success ||
        blobType === undefined
      )
        return NOT_NATIVE;
      return new Blob([value as Blob], {
        type: read<string>(blobType, value),
      });
    }
    case "[object RegExp]": {
      const source = tryRead<string>(regexpSource, value);
      return source.success
        ? new RegExp(source.value, read<string>(regexpFlags, value))
        : NOT_NATIVE;
    }
    default:
      return NOT_NATIVE;
  }
};

const cloneBufferRange = (
  input: ArrayBufferLike,
  byteOffset: number,
  byteLength: number,
  shared?: boolean,
): ArrayBuffer | SharedArrayBuffer => {
  if (shared === undefined)
    shared = tryRead<number>(sharedArrayBufferByteLength, input).success;
  let output: ArrayBuffer | SharedArrayBuffer;
  if (shared) {
    if (typeof SharedArrayBuffer === "undefined")
      throw new TypeError("SharedArrayBuffer is not available");
    output = new SharedArrayBuffer(byteLength);
  } else {
    read<number>(arrayBufferByteLength, input);
    output = new ArrayBuffer(byteLength);
  }
  new Uint8Array(output).set(new Uint8Array(input, byteOffset, byteLength));
  return output;
};
