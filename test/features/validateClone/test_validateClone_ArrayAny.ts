import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_validateClone_ArrayAny = _test_validateClone(
    "ArrayAny",
    ArrayAny.generate,
    (input) => typia.validateClone<ArrayAny>(input),
    ArrayAny.SPOILERS,
);
