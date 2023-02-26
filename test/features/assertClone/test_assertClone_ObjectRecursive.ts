import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_assertClone_ObjectRecursive = _test_assertClone(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.assertClone(input),
    ObjectRecursive.SPOILERS,
);
