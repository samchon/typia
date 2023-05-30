import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { NativeSimple } from "../../../structures/NativeSimple";
export const test_createIs_NativeSimple = _test_is("NativeSimple", NativeSimple.generate, (input: any): input is NativeSimple => {
    const $io0 = (input: any): boolean => input.date instanceof Date && input.uint8Array instanceof Uint8Array && input.uint8ClampedArray instanceof Uint8ClampedArray && input.uint16Array instanceof Uint16Array && input.uint32Array instanceof Uint32Array && input.bigUint64Array instanceof BigUint64Array && input.int8Array instanceof Int8Array && input.int16Array instanceof Int16Array && input.int32Array instanceof Int32Array && input.bigInt64Array instanceof BigInt64Array && input.float32Array instanceof Float32Array && input.float64Array instanceof Float64Array && input.buffer instanceof Buffer && input.arrayBuffer instanceof ArrayBuffer && input.sharedArrayBuffer instanceof SharedArrayBuffer && input.dataView instanceof DataView && input.weakSet instanceof WeakSet && input.weakMap instanceof WeakMap;
    return "object" === typeof input && null !== input && $io0(input);
}, NativeSimple.SPOILERS);
