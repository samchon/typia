import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";
export const test_createEquals_ArrayAtomicAlias = _test_equals("ArrayAtomicAlias", ArrayAtomicAlias.generate, (input: any, _exceptionable: boolean = true): input is ArrayAtomicAlias => {
    return Array.isArray(input) && (input.length === 3 && (Array.isArray(input[0]) && input[0].every((elem: any, _index1: number) => "boolean" === typeof elem)) && (Array.isArray(input[1]) && input[1].every((elem: any, _index2: number) => "number" === typeof elem && Number.isFinite(elem))) && (Array.isArray(input[2]) && input[2].every((elem: any, _index3: number) => "string" === typeof elem)));
});
