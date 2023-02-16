import typia from "typia";

import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ObjectRecursive = _test_assert(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.assert(input),
    ObjectRecursive.SPOILERS,
);
