import typia from "typia";

import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectRecursive = _test_validateParse(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.createValidateParse<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
