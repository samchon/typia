import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_ObjectRecursive = _test_validateClone(
    "ObjectRecursive",
    ObjectRecursive.generate,
    TSON.createValidateClone<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
