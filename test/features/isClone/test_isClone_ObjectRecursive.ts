import typia from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectRecursive = _test_isClone(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.isClone(input),
    ObjectRecursive.SPOILERS,
);