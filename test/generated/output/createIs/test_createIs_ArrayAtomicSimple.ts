import typia from "../../../src";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";
import { _test_is } from "../internal/_test_is";
export const test_createIs_ArrayAtomicSimple = _test_is("ArrayAtomicSimple", ArrayAtomicSimple.generate, (input: any): input is ArrayAtomicSimple => {
    return Array.isArray(input) && (input.length === 3 && (Array.isArray(input[0]) && input[0].every((elem: any) => "boolean" === typeof elem)) && (Array.isArray(input[1]) && input[1].every((elem: any) => "number" === typeof elem)) && (Array.isArray(input[2]) && input[2].every((elem: any) => "string" === typeof elem)));
}, ArrayAtomicSimple.SPOILERS);
