import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { FunctionalArray } from "../../../structures/FunctionalArray";
export const test_createEquals_FunctionalArray = _test_equals("FunctionalArray", FunctionalArray.generate, (input: any, _exceptionable: boolean = true): input is FunctionalArray => {
    return Array.isArray(input) && input.every((elem: any, _index1: number) => "function" === typeof elem);
});
