import typia from "../../../src";
import { NativeSimple } from "../../structures/NativeSimple";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_assertClone_NativeSimple = _test_assertClone("NativeSimple", NativeSimple.generate, (input) => ((input: any): typia.Primitive<NativeSimple> => { const assert = (input: any) => {
    const $guard = (typia.assertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is NativeSimple => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => (input.date instanceof Date || $guard(_exceptionable, {
            path: _path + ".date",
            expected: "Date",
            value: input.date
        })) && (input.uint8Array instanceof Uint8Array || $guard(_exceptionable, {
            path: _path + ".uint8Array",
            expected: "Uint8Array",
            value: input.uint8Array
        })) && (input.uint8ClampedArray instanceof Uint8ClampedArray || $guard(_exceptionable, {
            path: _path + ".uint8ClampedArray",
            expected: "Uint8ClampedArray",
            value: input.uint8ClampedArray
        })) && (input.uint16Array instanceof Uint16Array || $guard(_exceptionable, {
            path: _path + ".uint16Array",
            expected: "Uint16Array",
            value: input.uint16Array
        })) && (input.uint32Array instanceof Uint32Array || $guard(_exceptionable, {
            path: _path + ".uint32Array",
            expected: "Uint32Array",
            value: input.uint32Array
        })) && (input.bigUint64Array instanceof BigUint64Array || $guard(_exceptionable, {
            path: _path + ".bigUint64Array",
            expected: "BigUint64Array",
            value: input.bigUint64Array
        })) && (input.int8Array instanceof Int8Array || $guard(_exceptionable, {
            path: _path + ".int8Array",
            expected: "Int8Array",
            value: input.int8Array
        })) && (input.int16Array instanceof Int16Array || $guard(_exceptionable, {
            path: _path + ".int16Array",
            expected: "Int16Array",
            value: input.int16Array
        })) && (input.int32Array instanceof Int32Array || $guard(_exceptionable, {
            path: _path + ".int32Array",
            expected: "Int32Array",
            value: input.int32Array
        })) && (input.bigInt64Array instanceof BigInt64Array || $guard(_exceptionable, {
            path: _path + ".bigInt64Array",
            expected: "BigInt64Array",
            value: input.bigInt64Array
        })) && (input.float32Array instanceof Float32Array || $guard(_exceptionable, {
            path: _path + ".float32Array",
            expected: "Float32Array",
            value: input.float32Array
        })) && (input.float64Array instanceof Float64Array || $guard(_exceptionable, {
            path: _path + ".float64Array",
            expected: "Float64Array",
            value: input.float64Array
        })) && (input.buffer instanceof Buffer || $guard(_exceptionable, {
            path: _path + ".buffer",
            expected: "Buffer",
            value: input.buffer
        })) && (input.arrayBuffer instanceof ArrayBuffer || $guard(_exceptionable, {
            path: _path + ".arrayBuffer",
            expected: "ArrayBuffer",
            value: input.arrayBuffer
        })) && (input.sharedArrayBuffer instanceof SharedArrayBuffer || $guard(_exceptionable, {
            path: _path + ".sharedArrayBuffer",
            expected: "SharedArrayBuffer",
            value: input.sharedArrayBuffer
        })) && (input.dataView instanceof DataView || $guard(_exceptionable, {
            path: _path + ".dataView",
            expected: "DataView",
            value: input.dataView
        })) && (input.weakSet instanceof WeakSet || $guard(_exceptionable, {
            path: _path + ".weakSet",
            expected: "WeakSet",
            value: input.weakSet
        })) && (input.weakMap instanceof WeakMap || $guard(_exceptionable, {
            path: _path + ".weakMap",
            expected: "WeakMap",
            value: input.weakMap
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<NativeSimple>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as NativeSimple;
}; const clone = (input: NativeSimple): typia.Primitive<NativeSimple> => {
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
}; assert(input); const output = clone(input); /* NativeSimple */; return output as NativeSimple; })(input), NativeSimple.SPOILERS);
