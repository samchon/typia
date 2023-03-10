import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createValidateClone_ObjectRecursive = _test_validateClone(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.createValidateClone<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
