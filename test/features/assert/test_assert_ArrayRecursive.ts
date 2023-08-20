import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_assert_ArrayRecursive = _test_assert(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.assert<ArrayRecursive>(input),
    ArrayRecursive.SPOILERS,
);
