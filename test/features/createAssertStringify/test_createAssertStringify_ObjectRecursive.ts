import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_createAssertStringify_ObjectRecursive = _test_assertStringify(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.createAssertStringify<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
