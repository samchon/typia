import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { FunctionalArray } from "../../../structures/FunctionalArray";
export const test_equals_FunctionalArray = _test_equals("FunctionalArray", FunctionalArray.generate, (input) => ((input: any, _exceptionable: boolean = true): input is Array<(...args: Array<any>) => > => {
    return Array.isArray(input) && input.every((elem: any, _index1: number) => "function" === typeof elem);
})(input));
