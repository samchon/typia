import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_object_recursive =
    _test_assert_clone(
        "recursive object",
        ObjectRecursive.generate,
        TSON.createAssertClone<ObjectRecursive>(),
        ObjectRecursive.SPOILERS,
    );
