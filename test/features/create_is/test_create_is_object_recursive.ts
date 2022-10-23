import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_is } from "../is/_test_is";

export const test_create_is_object_recursive = _test_is(
    "recursive object",
    ObjectRecursive.generate,
    TSON.createIs<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
