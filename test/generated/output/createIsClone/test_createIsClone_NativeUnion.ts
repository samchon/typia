import typia from "../../../src";
import { NativeUnion } from "../../structures/NativeUnion";
import { _test_isClone } from "../internal/_test_isClone";
export const test_createIsClone_NativeUnion = _test_isClone("NativeUnion", NativeUnion.generate, (input: any): typia.Primitive<NativeUnion> | null => { const is = (input: any): input is NativeUnion => {
    const $io0 = (input: any) => input.date instanceof Date && (input.unsigned instanceof Uint8Array || input.unsigned instanceof Uint8ClampedArray || input.unsigned instanceof Uint16Array || input.unsigned instanceof Uint32Array || input.unsigned instanceof BigUint64Array) && (input.signed instanceof Int8Array || input.signed instanceof Int16Array || input.signed instanceof Int32Array || input.signed instanceof BigInt64Array) && (input.float instanceof Float32Array || input.float instanceof Float64Array) && (input.buffer instanceof Buffer || input.buffer instanceof ArrayBuffer || input.buffer instanceof SharedArrayBuffer || input.buffer instanceof DataView) && (input.weak instanceof WeakSet || input.weak instanceof WeakMap);
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
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
}; if (!is(input))
    return null; const output = clone(input); return output; }, NativeUnion.SPOILERS);
