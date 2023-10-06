import typia from "../../../src";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_misc_validatePrune_TypeTagArray = _test_misc_validatePrune(
    "TypeTagArray",
)<TypeTagArray>(
    TypeTagArray
)((input) => typia.misc.validatePrune<TypeTagArray>(input));
