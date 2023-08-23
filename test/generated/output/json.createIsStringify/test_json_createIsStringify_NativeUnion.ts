import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { NativeUnion } from "../../../structures/NativeUnion";

export const test_json_isStringify_NativeUnion = _test_json_isStringify(
    "NativeUnion",
)<NativeUnion>(NativeUnion)((input: NativeUnion): string | null => {
    const is = (input: any): input is NativeUnion => {
        const $io0 = (input: any): boolean =>
            (null === input.date || input.date instanceof Date) &&
            (input.unsigned instanceof Uint8Array ||
                input.unsigned instanceof Uint8ClampedArray ||
                input.unsigned instanceof Uint16Array ||
                input.unsigned instanceof Uint32Array ||
                input.unsigned instanceof BigUint64Array) &&
            (input.signed instanceof Int8Array ||
                input.signed instanceof Int16Array ||
                input.signed instanceof Int32Array ||
                input.signed instanceof BigInt64Array) &&
            (input.float instanceof Float32Array ||
                input.float instanceof Float64Array) &&
            (input.buffer instanceof ArrayBuffer ||
                input.buffer instanceof SharedArrayBuffer);
        return (
            Array.isArray(input) &&
            input.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io0(elem),
            )
        );
    };
    const stringify = (input: NativeUnion): string => {
        const $string = (typia.json.createIsStringify as any).string;
        const $throws = (typia.json.createIsStringify as any).throws;
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
    };
    return is(input) ? stringify(input) : null;
});
