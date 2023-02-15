import typia from "typia";

import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_ObjectGenericArray = _test_assertPrune(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createAssertPrune<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
