import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_validateClone_ObjectRecursive = _test_validateClone(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.validateClone<ObjectRecursive>(input),
    ObjectRecursive.SPOILERS,
);
