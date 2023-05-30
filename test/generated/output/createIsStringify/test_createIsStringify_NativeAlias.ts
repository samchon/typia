import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { NativeAlias } from "../../../structures/NativeAlias";
export const test_createIsStringify_NativeAlias = _test_isStringify("NativeAlias", NativeAlias.generate, (input: NativeAlias): string | null => { const is = (input: any): input is NativeAlias => {
    const $io0 = (input: any): boolean => input.date instanceof Date && input.uint8Array instanceof Uint8Array && input.uint8ClampedArray instanceof Uint8ClampedArray && input.uint16Array instanceof Uint16Array && input.uint32Array instanceof Uint32Array && input.bigUint64Array instanceof BigUint64Array && input.int8Array instanceof Int8Array && input.int16Array instanceof Int16Array && input.int32Array instanceof Int32Array && input.bigInt64Array instanceof BigInt64Array && input.float32Array instanceof Float32Array && input.float64Array instanceof Float64Array && input.buffer instanceof Buffer && input.arrayBuffer instanceof ArrayBuffer && input.sharedArrayBuffer instanceof SharedArrayBuffer && input.dataView instanceof DataView && input.weakSet instanceof WeakSet && input.weakMap instanceof WeakMap;
    return "object" === typeof input && null !== input && $io0(input);
}; const stringify = (input: NativeAlias): string => {
    const $string = (typia.createIsStringify as any).string;
    const $throws = (typia.createIsStringify as any).throws;
    const $number = (typia.createIsStringify as any).number;
    const $so0 = (input: any): any => `{"date":${$string(input.date.toJSON())},"uint8Array":{},"uint8ClampedArray":{},"uint16Array":{},"uint32Array":{},"bigUint64Array":{},"int8Array":{},"int16Array":{},"int32Array":{},"bigInt64Array":{},"float32Array":{},"float64Array":{},"buffer":${$so1(input.buffer.toJSON())},"arrayBuffer":{},"sharedArrayBuffer":{},"dataView":{},"weakSet":{},"weakMap":{}}`;
    const $so1 = (input: any): any => `{"type":${(() => {
        if ("string" === typeof input.type)
            return $string(input.type);
        if ("string" === typeof input.type)
            return "\"" + input.type + "\"";
        $throws({
            expected: "\"Buffer\"",
            value: input.type
        });
    })()},"data":${`[${input.data.map((elem: any) => $number(elem)).join(",")}]`}}`;
    return $so0(input);
}; return is(input) ? stringify(input) : null; }, NativeAlias.SPOILERS);
