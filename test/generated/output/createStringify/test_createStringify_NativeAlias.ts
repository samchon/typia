import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { NativeAlias } from "../../../structures/NativeAlias";

export const test_createStringify_NativeAlias = _test_stringify(
    "NativeAlias",
    NativeAlias.generate,
    (input: NativeAlias): string => {
        const $string = (typia.createStringify as any).string;
        const $throws = (typia.createStringify as any).throws;
        const $number = (typia.createStringify as any).number;
        const $so0 = (input: any): any =>
            `{"date":${$string(
                input.date.toJSON(),
            )},"uint8Array":{},"uint8ClampedArray":{},"uint16Array":{},"uint32Array":{},"bigUint64Array":{},"int8Array":{},"int16Array":{},"int32Array":{},"bigInt64Array":{},"float32Array":{},"float64Array":{},"buffer":${$so1(
                input.buffer.toJSON(),
            )},"arrayBuffer":{},"sharedArrayBuffer":{},"dataView":{},"weakSet":{},"weakMap":{}}`;
        const $so1 = (input: any): any =>
            `{"type":${(() => {
                if ("string" === typeof input.type) return $string(input.type);
                if ("string" === typeof input.type)
                    return '"' + input.type + '"';
                $throws({
                    expected: '"Buffer"',
                    value: input.type,
                });
            })()},"data":${`[${input.data
                .map((elem: any) => $number(elem))
                .join(",")}]`}}`;
        return $so0(input);
    },
);
