import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ObjectRecursive = _test_isClone(
    "ObjectRecursive",
    ObjectRecursive.generate,
    TSON.createIsClone<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);