import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_object_recursive = _test_is_stringify(
    "recursive object",
    ObjectRecursive.generate,
    TSON.createIsStringify<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
