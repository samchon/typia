import typia from "../../../src";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_misc_createValidatePrune_ConstantEnumeration = _test_misc_validatePrune(
    "ConstantEnumeration",
)<ConstantEnumeration>(
    ConstantEnumeration
)(typia.misc.createValidatePrune<ConstantEnumeration>());
