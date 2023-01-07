import typia from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_assertParse_ArrayRecursive = _test_assertParse(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.assertParse<ArrayRecursive>(input),
    ArrayRecursive.SPOILERS,
);