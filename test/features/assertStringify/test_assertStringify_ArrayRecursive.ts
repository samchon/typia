import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_assertStringify_ArrayRecursive = _test_assertStringify(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.assertStringify<ArrayRecursive>(input),
    ArrayRecursive.SPOILERS,
);
