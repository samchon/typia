import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_array_recursive = _test_assert_clone(
    "recursive array",
    ArrayRecursive.generate,
    (input) => TSON.assertClone(input),
    ArrayRecursive.SPOILERS,
);
