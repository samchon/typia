import typia from "typia";

import { ObjectUndefined } from "../../structures/ObjectUndefined";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ObjectUndefined = _test_validatePrune(
    "ObjectUndefined",
    ObjectUndefined.generate,
    typia.createValidatePrune<ObjectUndefined>(),
    ObjectUndefined.SPOILERS,
);
