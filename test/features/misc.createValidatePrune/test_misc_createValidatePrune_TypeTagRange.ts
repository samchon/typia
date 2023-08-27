import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_misc_validatePrune_TypeTagRange = _test_misc_validatePrune(
    "TypeTagRange",
)<TypeTagRange>(TypeTagRange)(typia.misc.createValidatePrune<TypeTagRange>());
