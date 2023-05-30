import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { FunctionalArray } from "../../../structures/FunctionalArray";
export const test_is_FunctionalArray = _test_is("FunctionalArray", FunctionalArray.generate, (input) => ((input: any): input is Array<(...args: Array<any>) => > => {
    return Array.isArray(input) && input.every((elem: any) => "function" === typeof elem);
})(input), FunctionalArray.SPOILERS);
