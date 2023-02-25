import typia from "../../../src";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_ArrayAtomicAlias = _test_clone("ArrayAtomicAlias", ArrayAtomicAlias.generate, (input) => ((input: ArrayAtomicAlias): typia.Primitive<ArrayAtomicAlias> => {
    return Array.isArray(input) && (input.length === 3 && (Array.isArray(input[0]) && input[0].every((elem: any) => "boolean" === typeof elem)) && (Array.isArray(input[1]) && input[1].every((elem: any) => "number" === typeof elem)) && (Array.isArray(input[2]) && input[2].every((elem: any) => "string" === typeof elem))) ? [
        Array.isArray(input[0]) ? input[0].map((elem: any) => elem) : input[0],
        Array.isArray(input[1]) ? input[1].map((elem: any) => elem) : input[1],
        Array.isArray(input[2]) ? input[2].map((elem: any) => elem) : input[2]
    ] : input;
})(input));
