import typia from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_isClone } from "../internal/_test_isClone";
export const test_createIsClone_ArrayAtomicSimple = _test_isClone("ArrayAtomicSimple", ArrayAtomicSimple.generate, (input: any): typia.Primitive<ArrayAtomicSimple> | null => { const is = (input: any): input is ArrayAtomicSimple => {
    return Array.isArray(input) && (input.length === 3 && (Array.isArray(input[0]) && input[0].every((elem: any) => "boolean" === typeof elem)) && (Array.isArray(input[1]) && input[1].every((elem: any) => "number" === typeof elem)) && (Array.isArray(input[2]) && input[2].every((elem: any) => "string" === typeof elem)));
}; const clone = (input: ArrayAtomicSimple): typia.Primitive<ArrayAtomicSimple> => {
    return Array.isArray(input) && (input.length === 3 && (Array.isArray(input[0]) && input[0].every((elem: any) => "boolean" === typeof elem)) && (Array.isArray(input[1]) && input[1].every((elem: any) => "number" === typeof elem)) && (Array.isArray(input[2]) && input[2].every((elem: any) => "string" === typeof elem))) ? [
        Array.isArray(input[0]) ? input[0].map((elem: any) => elem) : input[0],
        Array.isArray(input[1]) ? input[1].map((elem: any) => elem) : input[1],
        Array.isArray(input[2]) ? input[2].map((elem: any) => elem) : input[2]
    ] : input;
}; if (!is(input))
    return null; const output = clone(input); return output; }, ArrayAtomicSimple.SPOILERS);
