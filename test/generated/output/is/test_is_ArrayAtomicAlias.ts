import typia from "../../../../src";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";
import { _test_is } from "../../../internal/_test_is";
export const test_is_ArrayAtomicAlias = _test_is("ArrayAtomicAlias", ArrayAtomicAlias.generate, (input) => ((input: any): input is [ArrayAtomicAlias.Alias<boolean>, ArrayAtomicAlias.Alias<number>, ArrayAtomicAlias.Alias<string>] => {
    return Array.isArray(input) && (input.length === 3 && (Array.isArray(input[0]) && input[0].every((elem: any) => "boolean" === typeof elem)) && (Array.isArray(input[1]) && input[1].every((elem: any) => "number" === typeof elem && Number.isFinite(elem))) && (Array.isArray(input[2]) && input[2].every((elem: any) => "string" === typeof elem)));
})(input), ArrayAtomicAlias.SPOILERS);
