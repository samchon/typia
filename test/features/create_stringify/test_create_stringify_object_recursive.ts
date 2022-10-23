import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_object_recursive = _test_stringify(
    "recursive object",
    ObjectRecursive.generate(),
    TSON.createStringify<ObjectRecursive>(),
);
