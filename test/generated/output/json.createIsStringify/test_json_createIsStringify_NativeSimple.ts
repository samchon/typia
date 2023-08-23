import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { NativeSimple } from "../../../structures/NativeSimple";

export const test_json_isStringify_NativeSimple = _test_json_isStringify(
    "NativeSimple",
)<NativeSimple>(NativeSimple)((input: NativeSimple): string | null => {
    const is = (input: any): input is NativeSimple => {
        const $io0 = (input: any): boolean =>
            input.date instanceof Date &&
            input.uint8Array instanceof Uint8Array &&
            input.uint8ClampedArray instanceof Uint8ClampedArray &&
            input.uint16Array instanceof Uint16Array &&
            input.uint32Array instanceof Uint32Array &&
            input.bigUint64Array instanceof BigUint64Array &&
            input.int8Array instanceof Int8Array &&
            input.int16Array instanceof Int16Array &&
            input.int32Array instanceof Int32Array &&
            input.bigInt64Array instanceof BigInt64Array &&
            input.float32Array instanceof Float32Array &&
            input.float64Array instanceof Float64Array &&
            input.arrayBuffer instanceof ArrayBuffer &&
            input.sharedArrayBuffer instanceof SharedArrayBuffer &&
            input.dataView instanceof DataView;
        return "object" === typeof input && null !== input && $io0(input);
    };
    const stringify = (input: NativeSimple): string => {
        const $string = (typia.json.createIsStringify as any).string;
        const $so0 = (input: any): any =>
            `{"date":${$string(
                input.date.toJSON(),
            )},"uint8Array":{},"uint8ClampedArray":{},"uint16Array":{},"uint32Array":{},"bigUint64Array":{},"int8Array":{},"int16Array":{},"int32Array":{},"bigInt64Array":{},"float32Array":{},"float64Array":{},"arrayBuffer":{},"sharedArrayBuffer":{},"dataView":{}}`;
        return $so0(input);
    };
    return is(input) ? stringify(input) : null;
});
