import typia from "../../../src";

import { ConstantEnumeration } from "../../structures/ConstantEnumeration";
import { _test_validatePrune } from "../../internal/_test_validatePrune";

export const test_createValidatePrune_ConstantEnumeration = _test_validatePrune(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    typia.createValidatePrune<ConstantEnumeration>(),
    ConstantEnumeration.SPOILERS,
);
