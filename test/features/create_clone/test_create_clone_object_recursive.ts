import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_object_recursive = _test_clone(
    "recursive object",
    ObjectRecursive.generate,
    TSON.createClone<ObjectRecursive>(),
);
