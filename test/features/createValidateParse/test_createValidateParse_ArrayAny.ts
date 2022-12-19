import typia from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ArrayAny = _test_validateParse(
    "ArrayAny",
    ArrayAny.generate,
    typia.createValidateParse<ArrayAny>(),
    ArrayAny.SPOILERS,
);