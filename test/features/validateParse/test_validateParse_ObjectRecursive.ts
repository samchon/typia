import typia from "../../../src";

import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_validateParse } from "../../internal/_test_validateParse";

export const test_validateParse_ObjectRecursive = _test_validateParse(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.validateParse<ObjectRecursive>(input),
    ObjectRecursive.SPOILERS,
);
