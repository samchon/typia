import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createClone_ObjectRecursive = _test_clone(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.createClone<ObjectRecursive>(),
);
