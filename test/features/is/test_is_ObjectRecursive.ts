import typia from "typia";

import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectRecursive = _test_is(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.is(input),
    ObjectRecursive.SPOILERS,
);
