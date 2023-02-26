import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_assertParse_ArrayRecursive = _test_assertParse(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.assertParse<ArrayRecursive>(input),
    ArrayRecursive.SPOILERS,
);
