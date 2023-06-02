import typia from "../../../src";

import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_createIsPrune_ObjectRecursive = _test_isPrune(
    "ObjectRecursive",
    ObjectRecursive.generate,
    typia.createIsPrune<ObjectRecursive>(),
    ObjectRecursive.SPOILERS,
);
