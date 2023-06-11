import typia from "../../../src";

import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_assertStringify } from "../../internal/_test_assertStringify";

export const test_createAssertStringify_ObjectRecursive = _test_assertStringify(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.createAssertStringify<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
