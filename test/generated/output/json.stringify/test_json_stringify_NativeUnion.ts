import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { NativeUnion } from "../../../structures/NativeUnion";

export const test_json_stringify_NativeUnion = _test_json_stringify(
    "NativeUnion",
)<NativeUnion>(NativeUnion)((input) =>
    ((input: NativeUnion): string => {
        const $string = (typia.json.stringify as any).string;
        const $throws = (typia.json.stringify as any).throws;
        const $so0 = (input: any): any =>
            `{"date":${
                null !== input.date ? $string(input.date.toJSON()) : "null"
            },"unsigned":${(() => {
                if (input.unsigned instanceof Uint8Array) return "{}";
                if (input.unsigned instanceof Uint8ClampedArray) return "{}";
                if (input.unsigned instanceof Uint16Array) return "{}";
                if (input.unsigned instanceof Uint32Array) return "{}";
                if (input.unsigned instanceof BigUint64Array) return "{}";
                $throws({
                    expected:
                        "(BigUint64Array | Uint16Array | Uint32Array | Uint8Array | Uint8ClampedArray)",
                    value: input.unsigned,
                });
            })()},"signed":${(() => {
                if (input.signed instanceof Int8Array) return "{}";
                if (input.signed instanceof Int16Array) return "{}";
                if (input.signed instanceof Int32Array) return "{}";
                if (input.signed instanceof BigInt64Array) return "{}";
                $throws({
                    expected:
                        "(BigInt64Array | Int16Array | Int32Array | Int8Array)",
                    value: input.signed,
                });
            })()},"float":${(() => {
                if (input.float instanceof Float32Array) return "{}";
                if (input.float instanceof Float64Array) return "{}";
                $throws({
                    expected: "(Float32Array | Float64Array)",
                    value: input.float,
                });
            })()},"buffer":${(() => {
                if (input.buffer instanceof ArrayBuffer) return "{}";
                if (input.buffer instanceof SharedArrayBuffer) return "{}";
                $throws({
                    expected: "(ArrayBuffer | SharedArrayBuffer)",
                    value: input.buffer,
                });
            })()}}`;
        return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
    })(input),
);
