import typia from "../../../src";
import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_misc_validateClone_ArrayAny = _test_misc_validateClone(
    "ArrayAny",
    ArrayAny.generate,
    (input) => typia.misc.validateClone(input),
    ArrayAny.SPOILERS,
);
