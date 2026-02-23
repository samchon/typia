/**
 * Union of JavaScript built-in class types.
 *
 * `NativeClass` includes Date, collections (Set, Map, WeakSet, WeakMap), typed
 * arrays (Uint8Array, Int32Array, etc.), binary data types (ArrayBuffer,
 * DataView, Blob, File), and RegExp. These types receive special handling in
 * typia's serialization and validation.
 */
export type NativeClass =
  | Date
  | Set<any>
  | Map<any, any>
  | WeakSet<any>
  | WeakMap<any, any>
  | Uint8Array
  | Uint8ClampedArray
  | Uint16Array
  | Uint32Array
  | BigUint64Array
  | Int8Array
  | Int16Array
  | Int32Array
  | BigInt64Array
  | Float32Array
  | Float64Array
  | ArrayBuffer
  | SharedArrayBuffer
  | DataView
  | Blob
  | File
  | RegExp;
