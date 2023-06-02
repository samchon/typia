import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_assertStringify_ObjectRecursive = _test_assertStringify(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.assertStringify(input),
    ObjectRecursive.SPOILERS,
);
