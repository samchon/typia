import typia from "typia";

import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_ObjectRecursive = _test_isPrune(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (input) => typia.isPrune(input),
    ObjectRecursive.SPOILERS,
);
