import typia from "typia";

import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_ObjectInternal = _test_isPrune(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.createIsPrune<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);
