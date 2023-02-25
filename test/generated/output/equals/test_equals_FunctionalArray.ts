import typia from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_equals } from "../internal/_test_equals";
export const test_equals_FunctionalArray = _test_equals("FunctionalArray", FunctionalArray.generate, (input) => ((input: any, _exceptionable: boolean): input is FunctionalArray => {
    return Array.isArray(input) && input.every((elem: any, _index1: number) => true);
})(input));
