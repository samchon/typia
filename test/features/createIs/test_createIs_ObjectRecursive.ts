import typia from "typia";

import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectRecursive = _test_is(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.createIs<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
