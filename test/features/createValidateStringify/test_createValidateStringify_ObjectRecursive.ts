import typia from "typia";

import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ObjectRecursive = _test_validateStringify(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.createValidateStringify<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
