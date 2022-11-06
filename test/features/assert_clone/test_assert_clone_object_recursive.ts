import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_object_recursive = _test_assert_clone(
    "recursive object",
    ObjectRecursive.generate,
    (input) => TSON.assertClone(input),
    ObjectRecursive.SPOILERS,
);
