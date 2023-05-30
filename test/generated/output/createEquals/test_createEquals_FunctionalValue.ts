import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { FunctionalValue } from "../../../structures/FunctionalValue";
export const test_createEquals_FunctionalValue = _test_equals("FunctionalValue", FunctionalValue.generate, (input: any, _exceptionable: boolean = true): input is FunctionalValue => {
    return "function" === typeof input;
});
