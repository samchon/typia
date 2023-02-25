import typia from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_assertStringify_NativeUnion = _test_assertStringify("NativeUnion", NativeUnion.generate, (input) => ((input: NativeUnion): string => { const assert = (input: any) => {
    const $guard = (typia.assertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is NativeUnion => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => (input.date instanceof Date || $guard(_exceptionable, {
            path: _path + ".date",
            expected: "Date",
            value: input.date
        })) && (input.unsigned instanceof Uint8Array || input.unsigned instanceof Uint8ClampedArray || input.unsigned instanceof Uint16Array || input.unsigned instanceof Uint32Array || input.unsigned instanceof BigUint64Array || $guard(_exceptionable, {
            path: _path + ".unsigned",
            expected: "(BigUint64Array | Uint16Array | Uint32Array | Uint8Array | Uint8ClampedArray)",
            value: input.unsigned
        })) && (input.signed instanceof Int8Array || input.signed instanceof Int16Array || input.signed instanceof Int32Array || input.signed instanceof BigInt64Array || $guard(_exceptionable, {
            path: _path + ".signed",
            expected: "(BigInt64Array | Int16Array | Int32Array | Int8Array)",
            value: input.signed
        })) && (input.float instanceof Float32Array || input.float instanceof Float64Array || $guard(_exceptionable, {
            path: _path + ".float",
            expected: "(Float32Array | Float64Array)",
            value: input.float
        })) && (input.buffer instanceof Buffer || input.buffer instanceof ArrayBuffer || input.buffer instanceof SharedArrayBuffer || input.buffer instanceof DataView || $guard(_exceptionable, {
            path: _path + ".buffer",
            expected: "(ArrayBuffer | Buffer | DataView | SharedArrayBuffer)",
            value: input.buffer
        })) && (input.weak instanceof WeakSet || input.weak instanceof WeakMap || $guard(_exceptionable, {
            path: _path + ".weak",
            expected: "(WeakMap | WeakSet)",
            value: input.weak
        }));
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<Resolve<NativeUnion.Union>>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<NativeUnion.Union>",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as NativeUnion;
}; const stringify = (input: NativeUnion): string => {
    const $string = (typia.assertStringify as any).string;
    const $throws = (typia.assertStringify as any).throws;
    const $io1 = (input: any) => "Buffer" === input.type && (Array.isArray(input.data) && input.data.every((elem: any) => "number" === typeof elem));
    const $so0 = (input: any) => `{"date":${$string(input.date.toJSON())},"unsigned":${(() => {
        if (input.unsigned instanceof Uint8Array)
            return "{}";
        if (input.unsigned instanceof Uint8ClampedArray)
            return "{}";
        if (input.unsigned instanceof Uint16Array)
            return "{}";
        if (input.unsigned instanceof Uint32Array)
            return "{}";
        if (input.unsigned instanceof BigUint64Array)
            return "{}";
        $throws({
            expected: "(BigUint64Array | Uint16Array | Uint32Array | Uint8Array | Uint8ClampedArray)",
            value: input.unsigned
        });
    })()},"signed":${(() => {
        if (input.signed instanceof Int8Array)
            return "{}";
        if (input.signed instanceof Int16Array)
            return "{}";
        if (input.signed instanceof Int32Array)
            return "{}";
        if (input.signed instanceof BigInt64Array)
            return "{}";
        $throws({
            expected: "(BigInt64Array | Int16Array | Int32Array | Int8Array)",
            value: input.signed
        });
    })()},"float":${(() => {
        if (input.float instanceof Float32Array)
            return "{}";
        if (input.float instanceof Float64Array)
            return "{}";
        $throws({
            expected: "(Float32Array | Float64Array)",
            value: input.float
        });
    })()},"buffer":${(() => {
        if ("object" === typeof input.buffer && "function" === typeof input.buffer.toJSON)
            return JSON.stringify(input.buffer.toJSON());
        if (input.buffer instanceof ArrayBuffer)
            return "{}";
        if (input.buffer instanceof SharedArrayBuffer)
            return "{}";
        if (input.buffer instanceof DataView)
            return "{}";
        if ("object" === typeof input.buffer && null !== input.buffer)
            return $so1(input.buffer);
        $throws({
            expected: "(ArrayBuffer | DataView | Resolve<__type> | SharedArrayBuffer | unknown)",
            value: input.buffer
        });
    })()},"weak":${(() => {
        if (input.weak instanceof WeakSet)
            return "{}";
        if (input.weak instanceof WeakMap)
            return "{}";
        $throws({
            expected: "(WeakMap | WeakSet)",
            value: input.weak
        });
    })()}}`;
    const $so1 = (input: any) => `{"type":${(() => {
        if ("string" === typeof input.type)
            return $string(input.type);
        if ("string" === typeof input.type)
            return "\"" + input.type + "\"";
        $throws({
            expected: "\"Buffer\"",
            value: input.type
        });
    })()},"data":${`[${input.data.map((elem: any) => elem).join(",")}]`}}`;
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
}; return stringify(assert(input)); })(input), NativeUnion.SPOILERS);
