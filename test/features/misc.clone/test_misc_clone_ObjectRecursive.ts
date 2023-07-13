import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_misc_clone_ObjectRecursive = _test_misc_clone(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.misc.clone(input),
);
