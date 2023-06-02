import typia from "../../../src";

import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_assertClone } from "../../internal/_test_assertClone";

export const test_assertClone_ObjectRecursive = _test_assertClone(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.assertClone(input),
    ObjectRecursive.SPOILERS,
);
