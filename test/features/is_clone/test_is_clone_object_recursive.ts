import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_object_recursive = _test_is_clone(
    "recursive object",
    ObjectRecursive.generate,
    (input) => TSON.isClone(input),
    ObjectRecursive.SPOILERS,
);
