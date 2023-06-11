import typia from "../../../src";

import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_validatePrune } from "../../internal/_test_validatePrune";

export const test_createValidatePrune_ObjectInternal = _test_validatePrune(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.createValidatePrune<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);
