import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_assert_equals } from "./_test_assert_equals";

export const test_assert_equals_object_recursive = _test_assert_equals(
    "recursive object",
    ObjectRecursive.generate,
    (input) => TSON.assertEquals(input),
);
