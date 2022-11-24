import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_assert } from "../internal/_test_assert";

export const test_create_assert_object_recursive = _test_assert(
    "recursive object",
    ObjectRecursive.generate,
    TSON.createAssert<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
