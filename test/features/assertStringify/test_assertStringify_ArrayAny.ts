import typia from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_ArrayAny = _test_assertStringify(
    "ArrayAny",
    ArrayAny.generate,
    (input) => typia.assertStringify(input),
    ArrayAny.SPOILERS,
);