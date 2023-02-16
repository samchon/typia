import typia from "typia";

import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_ObjectGenericArray = _test_isPrune(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createIsPrune<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
