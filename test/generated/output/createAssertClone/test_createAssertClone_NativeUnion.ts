import typia from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_createAssertClone_NativeUnion = _test_assertClone("NativeUnion", NativeUnion.generate, (input: any): typia.Primitive<NativeUnion> => { const assert = (input: any) => {
    const $guard = (typia.createAssertClone as any).guard;
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
}; const clone = (input: NativeUnion): typia.Primitive<NativeUnion> => {
    const $io1 = (input: any) => "Buffer" === input.type && (Array.isArray(input.data) && input.data.every((elem: any) => "number" === typeof elem));
    const $co0 = (input: any) => ({
        date: "object" === typeof input.date && null !== input.date && "function" === typeof input.date.toJSON ? input.date.toJSON() : input.date,
        unsigned: input.unsigned instanceof Uint8Array ? {} : input.unsigned instanceof Uint8ClampedArray ? {} : input.unsigned instanceof Uint16Array ? {} : input.unsigned instanceof Uint32Array ? {} : input.unsigned instanceof BigUint64Array ? {} : input.unsigned,
        signed: input.signed instanceof Int8Array ? {} : input.signed instanceof Int16Array ? {} : input.signed instanceof Int32Array ? {} : input.signed instanceof BigInt64Array ? {} : input.signed,
        float: input.float instanceof Float32Array ? {} : input.float instanceof Float64Array ? {} : input.float,
        buffer: "object" === typeof input.buffer && null !== input.buffer && "function" === typeof input.buffer.toJSON ? input.buffer.toJSON() : input.buffer instanceof ArrayBuffer ? {} : input.buffer instanceof SharedArrayBuffer ? {} : input.buffer instanceof DataView ? {} : "object" === typeof input.buffer && null !== input.buffer ? $co1(input.buffer) : input.buffer,
        weak: input.weak instanceof WeakSet ? {} : input.weak instanceof WeakMap ? {} : input.weak
    });
    const $co1 = (input: any) => ({
        type: input.type,
        data: Array.isArray(input.data) ? input.data.map((elem: any) => elem) : input.data
    });
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $co0(elem) : elem) : input;
}; assert(input); const output = clone(input); /* Array */; return output as NativeUnion; }, NativeUnion.SPOILERS);
