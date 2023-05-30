import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { FunctionalValue } from "../../../structures/FunctionalValue";
export const test_createIs_FunctionalValue = _test_is("FunctionalValue", FunctionalValue.generate, (input: any): input is FunctionalValue => {
    return "function" === typeof input;
});
