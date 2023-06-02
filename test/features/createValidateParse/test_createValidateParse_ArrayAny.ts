import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_createValidateParse_ArrayAny = _test_validateParse(
    "ArrayAny",
    ArrayAny.generate,
    typia.createValidateParse<ArrayAny>(),
    ArrayAny.SPOILERS,
);
