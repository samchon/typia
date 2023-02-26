import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_validateParse_ArrayAny = _test_validateParse(
    "ArrayAny",
    ArrayAny.generate,
    (input) => typia.validateParse<ArrayAny>(input),
    ArrayAny.SPOILERS,
);
