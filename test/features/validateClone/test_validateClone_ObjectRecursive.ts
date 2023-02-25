import typia from "../../../src";

import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ObjectRecursive = _test_validateClone(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.validateClone(input),
    ObjectRecursive.SPOILERS,
);
