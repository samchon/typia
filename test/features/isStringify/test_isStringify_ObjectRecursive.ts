import typia from "../../../src";

import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_ObjectRecursive = _test_isStringify(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.isStringify(input),
    ObjectRecursive.SPOILERS,
);
