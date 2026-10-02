/**
 * Union of JavaScript built-in class types.
 *
 * `NativeClass` includes Date, collections (Set, Map, WeakSet, WeakMap), typed
 * arrays (Uint8Array, Int32Array, etc.), binary data types (ArrayBuffer,
 * DataView, Blob, File), and RegExp. These types receive special handling in
 * typia's serialization and validation.
 *
 * @evidence contracts/common.md#principled-implementation A union lists the built-in objects that typia treats as opaque values rather than property bags: Date, Set, Map, weak collections, every typed array, array and data buffers, Blob, File and RegExp. A union is the direct representation of that fixed membership. Blob and File are only meaningful where the environment's type libraries declare them.
 * @evidence contracts/common.md#clear-and-simple-design A single union that every type converter and serializer can consult; there is no registry or option.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It names the language built-ins that the transform special-cases, not any consumer-defined class.
 * @evidence contracts/common.md#meaningful-documentation The comment states membership groups and why these receive special handling.
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
