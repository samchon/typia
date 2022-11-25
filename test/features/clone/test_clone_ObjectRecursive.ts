import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ObjectRecursive = _test_clone(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => TSON.clone(input),
);
