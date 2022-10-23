import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_object_recursive = _test_assert_equals(
    "recursive object",
    ObjectRecursive.generate,
    TSON.createAssertEquals<ObjectRecursive>(),
);
