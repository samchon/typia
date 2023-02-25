import typia from "../../../src";

import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_DynamicEnumeration = _test_validatePrune(
    "DynamicEnumeration",
    DynamicEnumeration.generate,
    typia.createValidatePrune<DynamicEnumeration>(),
    DynamicEnumeration.SPOILERS,
);
