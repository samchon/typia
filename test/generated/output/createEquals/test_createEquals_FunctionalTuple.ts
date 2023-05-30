import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { FunctionalTuple } from "../../../structures/FunctionalTuple";
export const test_createEquals_FunctionalTuple = _test_equals("FunctionalTuple", FunctionalTuple.generate, (input: any, _exceptionable: boolean = true): input is FunctionalTuple => {
    return Array.isArray(input) && (input.length === 3 && "function" === typeof input[0] && "function" === typeof input[1] && "function" === typeof input[2]);
});
