import typia from "../../../src";
import { NativeAlias } from "../../structures/NativeAlias";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_NativeAlias = _test_clone("NativeAlias", NativeAlias.generate, (input) => ((input: NativeAlias): typia.Primitive<NativeAlias> => {
    const $co0 = (input: any) => ({
        date: "object" === typeof input.date && null !== input.date && "function" === typeof input.date.toJSON ? input.date.toJSON() : input.date,
        uint8Array: input.uint8Array instanceof Uint8Array ? {} : input.uint8Array,
        uint8ClampedArray: input.uint8ClampedArray instanceof Uint8ClampedArray ? {} : input.uint8ClampedArray,
        uint16Array: input.uint16Array instanceof Uint16Array ? {} : input.uint16Array,
        uint32Array: input.uint32Array instanceof Uint32Array ? {} : input.uint32Array,
        bigUint64Array: input.bigUint64Array instanceof BigUint64Array ? {} : input.bigUint64Array,
        int8Array: input.int8Array instanceof Int8Array ? {} : input.int8Array,
        int16Array: input.int16Array instanceof Int16Array ? {} : input.int16Array,
        int32Array: input.int32Array instanceof Int32Array ? {} : input.int32Array,
        bigInt64Array: input.bigInt64Array instanceof BigInt64Array ? {} : input.bigInt64Array,
        float32Array: input.float32Array instanceof Float32Array ? {} : input.float32Array,
        float64Array: input.float64Array instanceof Float64Array ? {} : input.float64Array,
        buffer: "object" === typeof input.buffer && null !== input.buffer && "function" === typeof input.buffer.toJSON ? "object" === typeof input.buffer.toJSON() && null !== input.buffer.toJSON() ? $co1(input.buffer.toJSON()) : input.buffer.toJSON() : input.buffer,
        arrayBuffer: input.arrayBuffer instanceof ArrayBuffer ? {} : input.arrayBuffer,
        sharedArrayBuffer: input.sharedArrayBuffer instanceof SharedArrayBuffer ? {} : input.sharedArrayBuffer,
        dataView: input.dataView instanceof DataView ? {} : input.dataView,
        weakSet: input.weakSet instanceof WeakSet ? {} : input.weakSet,
        weakMap: input.weakMap instanceof WeakMap ? {} : input.weakMap
    });
    const $co1 = (input: any) => ({
        type: input.type,
        data: Array.isArray(input.data) ? input.data.map((elem: any) => elem) : input.data
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
})(input));
