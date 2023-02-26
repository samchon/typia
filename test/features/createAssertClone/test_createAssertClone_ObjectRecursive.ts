import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createAssertClone_ObjectRecursive = _test_assertClone(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.createAssertClone<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
