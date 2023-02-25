import typia from "../../../src";

import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ObjectRecursive = _test_isParse(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.createIsParse<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
