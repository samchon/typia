import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_assertParse_ObjectRecursive = _test_assertParse(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.assertParse<ObjectRecursive>(input),
    ObjectRecursive.SPOILERS,
);
