import typia from "../../../src";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_misc_createValidatePrune_TypeTagDefault = _test_misc_validatePrune(
    "TypeTagDefault",
)<TypeTagDefault>(
    TypeTagDefault
)(typia.misc.createValidatePrune<TypeTagDefault>());
