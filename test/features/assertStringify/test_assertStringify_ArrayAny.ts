import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_assertStringify_ArrayAny = _test_assertStringify(
    "ArrayAny",
    ArrayAny.generate,
    (input) => typia.assertStringify<ArrayAny>(input),
    ArrayAny.SPOILERS,
);
