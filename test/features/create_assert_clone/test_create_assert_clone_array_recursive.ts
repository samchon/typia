import TSON from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_array_recursive = _test_assert_clone(
    "recursive array",
    ArrayRecursive.generate,
    TSON.createAssertClone<ArrayRecursive>(),
    ArrayRecursive.SPOILERS,
);
