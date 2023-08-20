import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_isClone_ObjectRecursive = _test_isClone(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.isClone<ObjectRecursive>(input),
    ObjectRecursive.SPOILERS,
);
