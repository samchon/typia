import typia from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ObjectRecursive = _test_isClone(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.createIsClone<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);