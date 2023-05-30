import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";
export const test_createIsClone_ArrayAtomicSimple = _test_isClone("ArrayAtomicSimple", ArrayAtomicSimple.generate, (input: any): typia.Primitive<ArrayAtomicSimple> | null => { const is = (input: any): input is ArrayAtomicSimple => {
    return Array.isArray(input) && (input.length === 3 && (Array.isArray(input[0]) && input[0].every((elem: any) => "boolean" === typeof elem)) && (Array.isArray(input[1]) && input[1].every((elem: any) => "number" === typeof elem && Number.isFinite(elem))) && (Array.isArray(input[2]) && input[2].every((elem: any) => "string" === typeof elem)));
}; const clone = (input: ArrayAtomicSimple): typia.Primitive<ArrayAtomicSimple> => {
    return Array.isArray(input) && (input.length === 3 && (Array.isArray(input[0]) && input[0].every((elem: any) => "boolean" === typeof elem)) && (Array.isArray(input[1]) && input[1].every((elem: any) => "number" === typeof elem)) && (Array.isArray(input[2]) && input[2].every((elem: any) => "string" === typeof elem))) ? [
        Array.isArray(input[0]) ? input[0].map((elem: any) => elem as any) : input[0] as any,
        Array.isArray(input[1]) ? input[1].map((elem: any) => elem as any) : input[1] as any,
        Array.isArray(input[2]) ? input[2].map((elem: any) => elem as any) : input[2] as any
    ] as any : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; }, ArrayAtomicSimple.SPOILERS);
