import typia from "../../../src";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_misc_validatePrune_TypeTagLength = _test_misc_validatePrune(
    "TypeTagLength",
)<TypeTagLength>(
    TypeTagLength
)((input) => typia.misc.validatePrune<TypeTagLength>(input));
