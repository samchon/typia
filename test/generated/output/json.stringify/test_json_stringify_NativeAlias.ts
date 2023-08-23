import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { NativeAlias } from "../../../structures/NativeAlias";

export const test_json_stringify_NativeAlias = _test_json_stringify(
    "NativeAlias",
)<NativeAlias>(NativeAlias)((input) =>
    ((input: NativeAlias): string => {
        const $string = (typia.json.stringify as any).string;
        const $so0 = (input: any): any =>
            `{"date":${$string(
                input.date.toJSON(),
            )},"uint8Array":{},"uint8ClampedArray":{},"uint16Array":{},"uint32Array":{},"bigUint64Array":{},"int8Array":{},"int16Array":{},"int32Array":{},"bigInt64Array":{},"float32Array":{},"float64Array":{},"arrayBuffer":{},"sharedArrayBuffer":{},"dataView":{}}`;
        return $so0(input);
    })(input),
);
