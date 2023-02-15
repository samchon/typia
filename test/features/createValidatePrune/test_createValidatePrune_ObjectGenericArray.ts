import typia from "typia";

import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ObjectGenericArray = _test_validatePrune(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createValidatePrune<ObjectGenericArray>(),
    ObjectGenericArray.SPOILERS,
);
