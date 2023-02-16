import typia from "typia";

import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ObjectPrimitive = _test_validatePrune(
    "ObjectPrimitive",
    ObjectPrimitive.generate,
    typia.createValidatePrune<ObjectPrimitive>(),
    ObjectPrimitive.SPOILERS,
);
