import typia from "../../../src";

import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_ConstantConstEnumeration = _test_validatePrune(
    "ConstantConstEnumeration",
    ConstantConstEnumeration.generate,
    typia.createValidatePrune<ConstantConstEnumeration>(),
    ConstantConstEnumeration.SPOILERS,
);
