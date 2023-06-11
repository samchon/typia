import typia from "../../../../src";
import { FunctionalValue } from "../../../structures/FunctionalValue";
import { _test_is } from "../../../internal/_test_is";
export const test_createIs_FunctionalValue = _test_is("FunctionalValue", FunctionalValue.generate, (input: any): input is FunctionalValue => {
    return "function" === typeof input;
});
