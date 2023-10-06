import typia from "../../../src";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_misc_createValidatePrune_DynamicUnion = _test_misc_validatePrune(
    "DynamicUnion",
)<DynamicUnion>(
    DynamicUnion
)(typia.misc.createValidatePrune<DynamicUnion>());
