import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_assert } from "../assert/_test_assert";

export const test_assert_object_recursive = _test_assert(
    "recursive object",
    ObjectRecursive.generate,
    (input) => TSON.assertType(input),
    ObjectRecursive.SPOILERS,
);
