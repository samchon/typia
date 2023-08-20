import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_isStringify_ArrayAny = _test_isStringify(
    "ArrayAny",
    ArrayAny.generate,
    (input) => typia.isStringify<ArrayAny>(input),
    ArrayAny.SPOILERS,
);
