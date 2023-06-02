import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { NativeSimple } from "../../../structures/NativeSimple";

export const test_createStringify_NativeSimple = _test_stringify(
    "NativeSimple",
    NativeSimple.generate,
    (input: NativeSimple): string => {
        const $string: any = (typia.createStringify as any).string;
        const $throws: any = (typia.createStringify as any).throws;
        const $number: any = (typia.createStringify as any).number;
        const $so0: any = (input: any): any =>
            `{"date":${$string(
                input.date.toJSON(),
            )},"uint8Array":{},"uint8ClampedArray":{},"uint16Array":{},"uint32Array":{},"bigUint64Array":{},"int8Array":{},"int16Array":{},"int32Array":{},"bigInt64Array":{},"float32Array":{},"float64Array":{},"buffer":${$so1(
                input.buffer.toJSON(),
            )},"arrayBuffer":{},"sharedArrayBuffer":{},"dataView":{},"weakSet":{},"weakMap":{}}`;
        const $so1: any = (input: any): any =>
            `{"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"Buffer"',
                    value: input.type,
                });
            })()},"data":${(() =>
                `[${input.data
                    .map((elem: any) => $number(elem))
                    .join(",")}]`)()}}`;
        return $so0(input);
    },
);
