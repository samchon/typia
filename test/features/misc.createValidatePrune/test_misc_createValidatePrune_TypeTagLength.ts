import typia from "../../../src";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_misc_createValidatePrune_TypeTagLength = _test_misc_validatePrune(
    "TypeTagLength",
)<TypeTagLength>(
    TypeTagLength
)(typia.misc.createValidatePrune<TypeTagLength>());
