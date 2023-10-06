import typia from "../../../src";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

export const test_misc_createValidatePrune_TypeTagNaN = _test_misc_validatePrune(
    "TypeTagNaN",
)<TypeTagNaN>(
    TypeTagNaN
)(typia.misc.createValidatePrune<TypeTagNaN>());
