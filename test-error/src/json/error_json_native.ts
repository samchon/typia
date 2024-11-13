import typia from "typia";

interface IPointer<T> {
  value: T;
}

/* -----------------------------------------------------------
    Uint8Array
----------------------------------------------------------- */
// JSON SCHEMA
typia.json.application<[Uint8Array]>();
typia.json.application<[[Uint8Array, Uint8Array]]>();
typia.json.application<[Uint8Array[]]>();
typia.json.application<[Record<string, Uint8Array>]>();
typia.json.application<[IPointer<Uint8Array>]>();
typia.json.application<[IPointer<[Uint8Array, Uint8Array]>]>();
typia.json.application<[IPointer<Uint8Array[]>]>();
typia.json.application<[IPointer<Record<string, Uint8Array>>]>();

// ENCODE
typia.json.createStringify<Uint8Array>();
typia.json.createStringify<[Uint8Array, Uint8Array]>();
typia.json.createStringify<Uint8Array[]>();
typia.json.createStringify<Record<string, Uint8Array>>();
typia.json.createStringify<IPointer<Uint8Array>>();
typia.json.createStringify<IPointer<[Uint8Array, Uint8Array]>>();
typia.json.createStringify<IPointer<Uint8Array[]>>();
typia.json.createStringify<IPointer<Record<string, Uint8Array>>>();

// DECODE
typia.json.createAssertParse<Uint8Array>();
typia.json.createAssertParse<[Uint8Array, Uint8Array]>();
typia.json.createAssertParse<Uint8Array[]>();
typia.json.createAssertParse<Record<string, Uint8Array>>();
typia.json.createAssertParse<IPointer<Uint8Array>>();
typia.json.createAssertParse<IPointer<[Uint8Array, Uint8Array]>>();
typia.json.createAssertParse<IPointer<Uint8Array[]>>();
typia.json.createAssertParse<IPointer<Record<string, Uint8Array>>>();

/* -----------------------------------------------------------
    Uint8ClampedArray
----------------------------------------------------------- */
// JSON SCHEMA
typia.json.application<[Uint8ClampedArray]>();
typia.json.application<[[Uint8ClampedArray, Uint8ClampedArray]]>();
typia.json.application<[Uint8ClampedArray[]]>();
typia.json.application<[Record<string, Uint8ClampedArray>]>();
typia.json.application<[IPointer<Uint8ClampedArray>]>();
typia.json.application<[IPointer<[Uint8ClampedArray, Uint8ClampedArray]>]>();
typia.json.application<[IPointer<Uint8ClampedArray[]>]>();
typia.json.application<[IPointer<Record<string, Uint8ClampedArray>>]>();

// ENCODE
typia.json.createStringify<Uint8ClampedArray>();
typia.json.createStringify<[Uint8ClampedArray, Uint8ClampedArray]>();
typia.json.createStringify<Uint8ClampedArray[]>();
typia.json.createStringify<Record<string, Uint8ClampedArray>>();
typia.json.createStringify<IPointer<Uint8ClampedArray>>();
typia.json.createStringify<IPointer<[Uint8ClampedArray, Uint8ClampedArray]>>();
typia.json.createStringify<IPointer<Uint8ClampedArray[]>>();
typia.json.createStringify<IPointer<Record<string, Uint8ClampedArray>>>();

// DECODE
typia.json.createAssertParse<Uint8ClampedArray>();
typia.json.createAssertParse<[Uint8ClampedArray, Uint8ClampedArray]>();
typia.json.createAssertParse<Uint8ClampedArray[]>();
typia.json.createAssertParse<Record<string, Uint8ClampedArray>>();
typia.json.createAssertParse<IPointer<Uint8ClampedArray>>();
typia.json.createAssertParse<
  IPointer<[Uint8ClampedArray, Uint8ClampedArray]>
>();
typia.json.createAssertParse<IPointer<Uint8ClampedArray[]>>();
typia.json.createAssertParse<IPointer<Record<string, Uint8ClampedArray>>>();

/* -----------------------------------------------------------
    Uint16Array
----------------------------------------------------------- */
// JSON SCHEMA
typia.json.application<[Uint16Array]>();
typia.json.application<[[Uint16Array, Uint16Array]]>();
typia.json.application<[Uint16Array[]]>();
typia.json.application<[Record<string, Uint16Array>]>();
typia.json.application<[IPointer<Uint16Array>]>();
typia.json.application<[IPointer<[Uint16Array, Uint16Array]>]>();
typia.json.application<[IPointer<Uint16Array[]>]>();
typia.json.application<[IPointer<Record<string, Uint16Array>>]>();

// ENCODE
typia.json.createStringify<Uint16Array>();
typia.json.createStringify<[Uint16Array, Uint16Array]>();
typia.json.createStringify<Uint16Array[]>();
typia.json.createStringify<Record<string, Uint16Array>>();
typia.json.createStringify<IPointer<Uint16Array>>();
typia.json.createStringify<IPointer<[Uint16Array, Uint16Array]>>();
typia.json.createStringify<IPointer<Uint16Array[]>>();
typia.json.createStringify<IPointer<Record<string, Uint16Array>>>();

// DECODE
typia.json.createAssertParse<Uint16Array>();
typia.json.createAssertParse<[Uint16Array, Uint16Array]>();
typia.json.createAssertParse<Uint16Array[]>();
typia.json.createAssertParse<Record<string, Uint16Array>>();
typia.json.createAssertParse<IPointer<Uint16Array>>();
typia.json.createAssertParse<IPointer<[Uint16Array, Uint16Array]>>();
typia.json.createAssertParse<IPointer<Uint16Array[]>>();
typia.json.createAssertParse<IPointer<Record<string, Uint16Array>>>();

/* -----------------------------------------------------------
    Uint32Array
----------------------------------------------------------- */
// JSON SCHEMA
typia.json.application<[Uint32Array]>();
typia.json.application<[[Uint32Array, Uint32Array]]>();
typia.json.application<[Uint32Array[]]>();
typia.json.application<[Record<string, Uint32Array>]>();
typia.json.application<[IPointer<Uint32Array>]>();
typia.json.application<[IPointer<[Uint32Array, Uint32Array]>]>();
typia.json.application<[IPointer<Uint32Array[]>]>();
typia.json.application<[IPointer<Record<string, Uint32Array>>]>();

// ENCODE
typia.json.createStringify<Uint32Array>();
typia.json.createStringify<[Uint32Array, Uint32Array]>();
typia.json.createStringify<Uint32Array[]>();
typia.json.createStringify<Record<string, Uint32Array>>();
typia.json.createStringify<IPointer<Uint32Array>>();
typia.json.createStringify<IPointer<[Uint32Array, Uint32Array]>>();
typia.json.createStringify<IPointer<Uint32Array[]>>();
typia.json.createStringify<IPointer<Record<string, Uint32Array>>>();

// DECODE
typia.json.createAssertParse<Uint32Array>();
typia.json.createAssertParse<[Uint32Array, Uint32Array]>();
typia.json.createAssertParse<Uint32Array[]>();
typia.json.createAssertParse<Record<string, Uint32Array>>();
typia.json.createAssertParse<IPointer<Uint32Array>>();
typia.json.createAssertParse<IPointer<[Uint32Array, Uint32Array]>>();
typia.json.createAssertParse<IPointer<Uint32Array[]>>();
typia.json.createAssertParse<IPointer<Record<string, Uint32Array>>>();

/* -----------------------------------------------------------
    BigUint64Array
----------------------------------------------------------- */
// JSON SCHEMA
typia.json.application<[BigUint64Array]>();
typia.json.application<[[BigUint64Array, BigUint64Array]]>();
typia.json.application<[BigUint64Array[]]>();
typia.json.application<[Record<string, BigUint64Array>]>();
typia.json.application<[IPointer<BigUint64Array>]>();
typia.json.application<[IPointer<[BigUint64Array, BigUint64Array]>]>();
typia.json.application<[IPointer<BigUint64Array[]>]>();
typia.json.application<[IPointer<Record<string, BigUint64Array>>]>();

// ENCODE
typia.json.createStringify<BigUint64Array>();
typia.json.createStringify<[BigUint64Array, BigUint64Array]>();
typia.json.createStringify<BigUint64Array[]>();
typia.json.createStringify<Record<string, BigUint64Array>>();
typia.json.createStringify<IPointer<BigUint64Array>>();
typia.json.createStringify<IPointer<[BigUint64Array, BigUint64Array]>>();
typia.json.createStringify<IPointer<BigUint64Array[]>>();
typia.json.createStringify<IPointer<Record<string, BigUint64Array>>>();

// DECODE
typia.json.createAssertParse<BigUint64Array>();
typia.json.createAssertParse<[BigUint64Array, BigUint64Array]>();
typia.json.createAssertParse<BigUint64Array[]>();
typia.json.createAssertParse<Record<string, BigUint64Array>>();
typia.json.createAssertParse<IPointer<BigUint64Array>>();
typia.json.createAssertParse<IPointer<[BigUint64Array, BigUint64Array]>>();
typia.json.createAssertParse<IPointer<BigUint64Array[]>>();
typia.json.createAssertParse<IPointer<Record<string, BigUint64Array>>>();

/* -----------------------------------------------------------
    Int8Array
----------------------------------------------------------- */
// JSON SCHEMA
typia.json.application<[Int8Array]>();
typia.json.application<[[Int8Array, Int8Array]]>();
typia.json.application<[Int8Array[]]>();
typia.json.application<[Record<string, Int8Array>]>();
typia.json.application<[IPointer<Int8Array>]>();
typia.json.application<[IPointer<[Int8Array, Int8Array]>]>();
typia.json.application<[IPointer<Int8Array[]>]>();
typia.json.application<[IPointer<Record<string, Int8Array>>]>();

// ENCODE
typia.json.createStringify<Int8Array>();
typia.json.createStringify<[Int8Array, Int8Array]>();
typia.json.createStringify<Int8Array[]>();
typia.json.createStringify<Record<string, Int8Array>>();
typia.json.createStringify<IPointer<Int8Array>>();
typia.json.createStringify<IPointer<[Int8Array, Int8Array]>>();
typia.json.createStringify<IPointer<Int8Array[]>>();
typia.json.createStringify<IPointer<Record<string, Int8Array>>>();

// DECODE
typia.json.createAssertParse<Int8Array>();
typia.json.createAssertParse<[Int8Array, Int8Array]>();
typia.json.createAssertParse<Int8Array[]>();
typia.json.createAssertParse<Record<string, Int8Array>>();
typia.json.createAssertParse<IPointer<Int8Array>>();
typia.json.createAssertParse<IPointer<[Int8Array, Int8Array]>>();
typia.json.createAssertParse<IPointer<Int8Array[]>>();
typia.json.createAssertParse<IPointer<Record<string, Int8Array>>>();

/* -----------------------------------------------------------
    Int16Array
----------------------------------------------------------- */
// JSON SCHEMA
typia.json.application<[Int16Array]>();
typia.json.application<[[Int16Array, Int16Array]]>();
typia.json.application<[Int16Array[]]>();
typia.json.application<[Record<string, Int16Array>]>();
typia.json.application<[IPointer<Int16Array>]>();
typia.json.application<[IPointer<[Int16Array, Int16Array]>]>();
typia.json.application<[IPointer<Int16Array[]>]>();
typia.json.application<[IPointer<Record<string, Int16Array>>]>();

// ENCODE
typia.json.createStringify<Int16Array>();
typia.json.createStringify<[Int16Array, Int16Array]>();
typia.json.createStringify<Int16Array[]>();
typia.json.createStringify<Record<string, Int16Array>>();
typia.json.createStringify<IPointer<Int16Array>>();
typia.json.createStringify<IPointer<[Int16Array, Int16Array]>>();
typia.json.createStringify<IPointer<Int16Array[]>>();
typia.json.createStringify<IPointer<Record<string, Int16Array>>>();

// DECODE
typia.json.createAssertParse<Int16Array>();
typia.json.createAssertParse<[Int16Array, Int16Array]>();
typia.json.createAssertParse<Int16Array[]>();
typia.json.createAssertParse<Record<string, Int16Array>>();
typia.json.createAssertParse<IPointer<Int16Array>>();
typia.json.createAssertParse<IPointer<[Int16Array, Int16Array]>>();
typia.json.createAssertParse<IPointer<Int16Array[]>>();
typia.json.createAssertParse<IPointer<Record<string, Int16Array>>>();

/* -----------------------------------------------------------
    Int32Array
----------------------------------------------------------- */
// JSON SCHEMA
typia.json.application<[Int32Array]>();
typia.json.application<[[Int32Array, Int32Array]]>();
typia.json.application<[Int32Array[]]>();
typia.json.application<[Record<string, Int32Array>]>();
typia.json.application<[IPointer<Int32Array>]>();
typia.json.application<[IPointer<[Int32Array, Int32Array]>]>();
typia.json.application<[IPointer<Int32Array[]>]>();
typia.json.application<[IPointer<Record<string, Int32Array>>]>();

// ENCODE
typia.json.createStringify<Int32Array>();
typia.json.createStringify<[Int32Array, Int32Array]>();
typia.json.createStringify<Int32Array[]>();
typia.json.createStringify<Record<string, Int32Array>>();
typia.json.createStringify<IPointer<Int32Array>>();
typia.json.createStringify<IPointer<[Int32Array, Int32Array]>>();
typia.json.createStringify<IPointer<Int32Array[]>>();
typia.json.createStringify<IPointer<Record<string, Int32Array>>>();

// DECODE
typia.json.createAssertParse<Int32Array>();
typia.json.createAssertParse<[Int32Array, Int32Array]>();
typia.json.createAssertParse<Int32Array[]>();
typia.json.createAssertParse<Record<string, Int32Array>>();
typia.json.createAssertParse<IPointer<Int32Array>>();
typia.json.createAssertParse<IPointer<[Int32Array, Int32Array]>>();
typia.json.createAssertParse<IPointer<Int32Array[]>>();
typia.json.createAssertParse<IPointer<Record<string, Int32Array>>>();

/* -----------------------------------------------------------
    BigInt64Array
----------------------------------------------------------- */
// JSON SCHEMA
typia.json.application<[BigInt64Array]>();
typia.json.application<[[BigInt64Array, BigInt64Array]]>();
typia.json.application<[BigInt64Array[]]>();
typia.json.application<[Record<string, BigInt64Array>]>();
typia.json.application<[IPointer<BigInt64Array>]>();
typia.json.application<[IPointer<[BigInt64Array, BigInt64Array]>]>();
typia.json.application<[IPointer<BigInt64Array[]>]>();
typia.json.application<[IPointer<Record<string, BigInt64Array>>]>();

// ENCODE
typia.json.createStringify<BigInt64Array>();
typia.json.createStringify<[BigInt64Array, BigInt64Array]>();
typia.json.createStringify<BigInt64Array[]>();
typia.json.createStringify<Record<string, BigInt64Array>>();
typia.json.createStringify<IPointer<BigInt64Array>>();
typia.json.createStringify<IPointer<[BigInt64Array, BigInt64Array]>>();
typia.json.createStringify<IPointer<BigInt64Array[]>>();
typia.json.createStringify<IPointer<Record<string, BigInt64Array>>>();

// DECODE
typia.json.createAssertParse<BigInt64Array>();
typia.json.createAssertParse<[BigInt64Array, BigInt64Array]>();
typia.json.createAssertParse<BigInt64Array[]>();
typia.json.createAssertParse<Record<string, BigInt64Array>>();
typia.json.createAssertParse<IPointer<BigInt64Array>>();
typia.json.createAssertParse<IPointer<[BigInt64Array, BigInt64Array]>>();
typia.json.createAssertParse<IPointer<BigInt64Array[]>>();
typia.json.createAssertParse<IPointer<Record<string, BigInt64Array>>>();

/* -----------------------------------------------------------
    Float32Array
----------------------------------------------------------- */
// JSON SCHEMA
typia.json.application<[Float32Array]>();
typia.json.application<[[Float32Array, Float32Array]]>();
typia.json.application<[Float32Array[]]>();
typia.json.application<[Record<string, Float32Array>]>();
typia.json.application<[IPointer<Float32Array>]>();
typia.json.application<[IPointer<[Float32Array, Float32Array]>]>();
typia.json.application<[IPointer<Float32Array[]>]>();
typia.json.application<[IPointer<Record<string, Float32Array>>]>();

// ENCODE
typia.json.createStringify<Float32Array>();
typia.json.createStringify<[Float32Array, Float32Array]>();
typia.json.createStringify<Float32Array[]>();
typia.json.createStringify<Record<string, Float32Array>>();
typia.json.createStringify<IPointer<Float32Array>>();
typia.json.createStringify<IPointer<[Float32Array, Float32Array]>>();
typia.json.createStringify<IPointer<Float32Array[]>>();
typia.json.createStringify<IPointer<Record<string, Float32Array>>>();

// DECODE
typia.json.createAssertParse<Float32Array>();
typia.json.createAssertParse<[Float32Array, Float32Array]>();
typia.json.createAssertParse<Float32Array[]>();
typia.json.createAssertParse<Record<string, Float32Array>>();
typia.json.createAssertParse<IPointer<Float32Array>>();
typia.json.createAssertParse<IPointer<[Float32Array, Float32Array]>>();
typia.json.createAssertParse<IPointer<Float32Array[]>>();
typia.json.createAssertParse<IPointer<Record<string, Float32Array>>>();

/* -----------------------------------------------------------
    Float64Array
----------------------------------------------------------- */
// JSON SCHEMA
typia.json.application<[Float64Array]>();
typia.json.application<[[Float64Array, Float64Array]]>();
typia.json.application<[Float64Array[]]>();
typia.json.application<[Record<string, Float64Array>]>();
typia.json.application<[IPointer<Float64Array>]>();
typia.json.application<[IPointer<[Float64Array, Float64Array]>]>();
typia.json.application<[IPointer<Float64Array[]>]>();
typia.json.application<[IPointer<Record<string, Float64Array>>]>();

// ENCODE
typia.json.createStringify<Float64Array>();
typia.json.createStringify<[Float64Array, Float64Array]>();
typia.json.createStringify<Float64Array[]>();
typia.json.createStringify<Record<string, Float64Array>>();
typia.json.createStringify<IPointer<Float64Array>>();
typia.json.createStringify<IPointer<[Float64Array, Float64Array]>>();
typia.json.createStringify<IPointer<Float64Array[]>>();
typia.json.createStringify<IPointer<Record<string, Float64Array>>>();

// DECODE
typia.json.createAssertParse<Float64Array>();
typia.json.createAssertParse<[Float64Array, Float64Array]>();
typia.json.createAssertParse<Float64Array[]>();
typia.json.createAssertParse<Record<string, Float64Array>>();
typia.json.createAssertParse<IPointer<Float64Array>>();
typia.json.createAssertParse<IPointer<[Float64Array, Float64Array]>>();
typia.json.createAssertParse<IPointer<Float64Array[]>>();
typia.json.createAssertParse<IPointer<Record<string, Float64Array>>>();

/* -----------------------------------------------------------
    ArrayBuffer
----------------------------------------------------------- */
// JSON SCHEMA
typia.json.application<[ArrayBuffer]>();
typia.json.application<[[ArrayBuffer, ArrayBuffer]]>();
typia.json.application<[ArrayBuffer[]]>();
typia.json.application<[Record<string, ArrayBuffer>]>();
typia.json.application<[IPointer<ArrayBuffer>]>();
typia.json.application<[IPointer<[ArrayBuffer, ArrayBuffer]>]>();
typia.json.application<[IPointer<ArrayBuffer[]>]>();
typia.json.application<[IPointer<Record<string, ArrayBuffer>>]>();

// ENCODE
typia.json.createStringify<ArrayBuffer>();
typia.json.createStringify<[ArrayBuffer, ArrayBuffer]>();
typia.json.createStringify<ArrayBuffer[]>();
typia.json.createStringify<Record<string, ArrayBuffer>>();
typia.json.createStringify<IPointer<ArrayBuffer>>();
typia.json.createStringify<IPointer<[ArrayBuffer, ArrayBuffer]>>();
typia.json.createStringify<IPointer<ArrayBuffer[]>>();
typia.json.createStringify<IPointer<Record<string, ArrayBuffer>>>();

// DECODE
typia.json.createAssertParse<ArrayBuffer>();
typia.json.createAssertParse<[ArrayBuffer, ArrayBuffer]>();
typia.json.createAssertParse<ArrayBuffer[]>();
typia.json.createAssertParse<Record<string, ArrayBuffer>>();
typia.json.createAssertParse<IPointer<ArrayBuffer>>();
typia.json.createAssertParse<IPointer<[ArrayBuffer, ArrayBuffer]>>();
typia.json.createAssertParse<IPointer<ArrayBuffer[]>>();
typia.json.createAssertParse<IPointer<Record<string, ArrayBuffer>>>();

/* -----------------------------------------------------------
    SharedArrayBuffer
----------------------------------------------------------- */
// JSON SCHEMA
typia.json.application<[SharedArrayBuffer]>();
typia.json.application<[[SharedArrayBuffer, SharedArrayBuffer]]>();
typia.json.application<[SharedArrayBuffer[]]>();
typia.json.application<[Record<string, SharedArrayBuffer>]>();
typia.json.application<[IPointer<SharedArrayBuffer>]>();
typia.json.application<[IPointer<[SharedArrayBuffer, SharedArrayBuffer]>]>();
typia.json.application<[IPointer<SharedArrayBuffer[]>]>();
typia.json.application<[IPointer<Record<string, SharedArrayBuffer>>]>();

// ENCODE
typia.json.createStringify<SharedArrayBuffer>();
typia.json.createStringify<[SharedArrayBuffer, SharedArrayBuffer]>();
typia.json.createStringify<SharedArrayBuffer[]>();
typia.json.createStringify<Record<string, SharedArrayBuffer>>();
typia.json.createStringify<IPointer<SharedArrayBuffer>>();
typia.json.createStringify<IPointer<[SharedArrayBuffer, SharedArrayBuffer]>>();
typia.json.createStringify<IPointer<SharedArrayBuffer[]>>();
typia.json.createStringify<IPointer<Record<string, SharedArrayBuffer>>>();

// DECODE
typia.json.createAssertParse<SharedArrayBuffer>();
typia.json.createAssertParse<[SharedArrayBuffer, SharedArrayBuffer]>();
typia.json.createAssertParse<SharedArrayBuffer[]>();
typia.json.createAssertParse<Record<string, SharedArrayBuffer>>();
typia.json.createAssertParse<IPointer<SharedArrayBuffer>>();
typia.json.createAssertParse<
  IPointer<[SharedArrayBuffer, SharedArrayBuffer]>
>();
typia.json.createAssertParse<IPointer<SharedArrayBuffer[]>>();
typia.json.createAssertParse<IPointer<Record<string, SharedArrayBuffer>>>();

/* -----------------------------------------------------------
    DataView
----------------------------------------------------------- */
// JSON SCHEMA
typia.json.application<[DataView]>();
typia.json.application<[[DataView, DataView]]>();
typia.json.application<[DataView[]]>();
typia.json.application<[Record<string, DataView>]>();
typia.json.application<[IPointer<DataView>]>();
typia.json.application<[IPointer<[DataView, DataView]>]>();
typia.json.application<[IPointer<DataView[]>]>();
typia.json.application<[IPointer<Record<string, DataView>>]>();

// ENCODE
typia.json.createStringify<DataView>();
typia.json.createStringify<[DataView, DataView]>();
typia.json.createStringify<DataView[]>();
typia.json.createStringify<Record<string, DataView>>();
typia.json.createStringify<IPointer<DataView>>();
typia.json.createStringify<IPointer<[DataView, DataView]>>();
typia.json.createStringify<IPointer<DataView[]>>();
typia.json.createStringify<IPointer<Record<string, DataView>>>();

// DECODE
typia.json.createAssertParse<DataView>();
typia.json.createAssertParse<[DataView, DataView]>();
typia.json.createAssertParse<DataView[]>();
typia.json.createAssertParse<Record<string, DataView>>();
typia.json.createAssertParse<IPointer<DataView>>();
typia.json.createAssertParse<IPointer<[DataView, DataView]>>();
typia.json.createAssertParse<IPointer<DataView[]>>();
typia.json.createAssertParse<IPointer<Record<string, DataView>>>();
