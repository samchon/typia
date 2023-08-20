import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_assertClone_ArrayRecursive = _test_assertClone(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.assertClone<ArrayRecursive>(input),
    ArrayRecursive.SPOILERS,
);
