import typia from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_ArrayRecursive = _test_assertClone(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.assertClone(input),
    ArrayRecursive.SPOILERS,
);