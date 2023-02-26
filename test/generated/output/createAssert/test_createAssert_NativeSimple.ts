import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { NativeSimple } from "../../../structures/NativeSimple";

export const test_createAssert_NativeSimple = _test_assert(
    "NativeSimple",
    NativeSimple.generate,
    (input: any): NativeSimple => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is NativeSimple => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (input.date instanceof Date ||
                    $guard(_exceptionable, {
                        path: _path + ".date",
                        expected: "Date",
                        value: input.date,
                    })) &&
                (input.uint8Array instanceof Uint8Array ||
                    $guard(_exceptionable, {
                        path: _path + ".uint8Array",
                        expected: "Uint8Array",
                        value: input.uint8Array,
                    })) &&
                (input.uint8ClampedArray instanceof Uint8ClampedArray ||
                    $guard(_exceptionable, {
                        path: _path + ".uint8ClampedArray",
                        expected: "Uint8ClampedArray",
                        value: input.uint8ClampedArray,
                    })) &&
                (input.uint16Array instanceof Uint16Array ||
                    $guard(_exceptionable, {
                        path: _path + ".uint16Array",
                        expected: "Uint16Array",
                        value: input.uint16Array,
                    })) &&
                (input.uint32Array instanceof Uint32Array ||
                    $guard(_exceptionable, {
                        path: _path + ".uint32Array",
                        expected: "Uint32Array",
                        value: input.uint32Array,
                    })) &&
                (input.bigUint64Array instanceof BigUint64Array ||
                    $guard(_exceptionable, {
                        path: _path + ".bigUint64Array",
                        expected: "BigUint64Array",
                        value: input.bigUint64Array,
                    })) &&
                (input.int8Array instanceof Int8Array ||
                    $guard(_exceptionable, {
                        path: _path + ".int8Array",
                        expected: "Int8Array",
                        value: input.int8Array,
                    })) &&
                (input.int16Array instanceof Int16Array ||
                    $guard(_exceptionable, {
                        path: _path + ".int16Array",
                        expected: "Int16Array",
                        value: input.int16Array,
                    })) &&
                (input.int32Array instanceof Int32Array ||
                    $guard(_exceptionable, {
                        path: _path + ".int32Array",
                        expected: "Int32Array",
                        value: input.int32Array,
                    })) &&
                (input.bigInt64Array instanceof BigInt64Array ||
                    $guard(_exceptionable, {
                        path: _path + ".bigInt64Array",
                        expected: "BigInt64Array",
                        value: input.bigInt64Array,
                    })) &&
                (input.float32Array instanceof Float32Array ||
                    $guard(_exceptionable, {
                        path: _path + ".float32Array",
                        expected: "Float32Array",
                        value: input.float32Array,
                    })) &&
                (input.float64Array instanceof Float64Array ||
                    $guard(_exceptionable, {
                        path: _path + ".float64Array",
                        expected: "Float64Array",
                        value: input.float64Array,
                    })) &&
                (input.buffer instanceof Buffer ||
                    $guard(_exceptionable, {
                        path: _path + ".buffer",
                        expected: "Buffer",
                        value: input.buffer,
                    })) &&
                (input.arrayBuffer instanceof ArrayBuffer ||
                    $guard(_exceptionable, {
                        path: _path + ".arrayBuffer",
                        expected: "ArrayBuffer",
                        value: input.arrayBuffer,
                    })) &&
                (input.sharedArrayBuffer instanceof SharedArrayBuffer ||
                    $guard(_exceptionable, {
                        path: _path + ".sharedArrayBuffer",
                        expected: "SharedArrayBuffer",
                        value: input.sharedArrayBuffer,
                    })) &&
                (input.dataView instanceof DataView ||
                    $guard(_exceptionable, {
                        path: _path + ".dataView",
                        expected: "DataView",
                        value: input.dataView,
                    })) &&
                (input.weakSet instanceof WeakSet ||
                    $guard(_exceptionable, {
                        path: _path + ".weakSet",
                        expected: "WeakSet",
                        value: input.weakSet,
                    })) &&
                (input.weakMap instanceof WeakMap ||
                    $guard(_exceptionable, {
                        path: _path + ".weakMap",
                        expected: "WeakMap",
                        value: input.weakMap,
                    }));
            return (
                (("object" === typeof input && null !== input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Resolve<NativeSimple>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
    NativeSimple.SPOILERS,
);
