import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_clone } from "./_test_clone";

export const test_clone_object_recursive = _test_clone(
    "recursive object",
    ObjectRecursive.generate,
    (input) => TSON.clone(input),
);
