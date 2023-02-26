import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createIsClone_ObjectRecursive = _test_isClone(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.createIsClone<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
