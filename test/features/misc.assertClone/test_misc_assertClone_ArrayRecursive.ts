import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_misc_assertClone_ArrayRecursive = _test_misc_assertClone(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) => typia.misc.assertClone(input),
    ArrayRecursive.SPOILERS,
);
