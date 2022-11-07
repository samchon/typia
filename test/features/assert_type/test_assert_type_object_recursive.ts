import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_assert_type } from "../assert_type/_test_assert_type";

export const test_assert_type_object_recursive = _test_assert_type(
    "recursive object",
    ObjectRecursive.generate,
    (input) => TSON.assertType(input),
    ObjectRecursive.SPOILERS,
);
