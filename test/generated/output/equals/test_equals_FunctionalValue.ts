import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { FunctionalValue } from "../../../structures/FunctionalValue";
export const test_equals_FunctionalValue = _test_equals("FunctionalValue", FunctionalValue.generate, (input) => ((input: any, _exceptionable: boolean = true): input is (...args: Array<any>) =>  => {
    return "function" === typeof input;
})(input));
