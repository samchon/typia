import TSON from "../../src";

console.log(
    TSON.createIs<Date>().toString(),
    TSON.createIs<Uint8Array>().toString(),
    TSON.createIs<Uint8ClampedArray>().toString(),
    TSON.createIs<Uint16Array>().toString(),
    TSON.createIs<Uint32Array>().toString(),
    TSON.createIs<BigUint64Array>().toString(),
    TSON.createIs<Int8Array>().toString(),
    TSON.createIs<Int16Array>().toString(),
    TSON.createIs<Int32Array>().toString(),
    TSON.createIs<BigInt64Array>().toString(),
    TSON.createIs<Float32Array>().toString(),
    TSON.createIs<Float64Array>().toString(),
    TSON.createIs<Buffer>().toString(),
    TSON.createIs<ArrayBuffer>().toString(),
    TSON.createIs<SharedArrayBuffer>().toString(),
    TSON.createIs<DataView>().toString(),
);
