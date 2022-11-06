import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_object_recursive = _test_is_clone(
    "recursive object",
    ObjectRecursive.generate,
    TSON.createIsClone<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
