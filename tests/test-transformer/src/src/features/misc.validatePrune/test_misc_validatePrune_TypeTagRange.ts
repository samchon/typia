import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_misc_validatePrune_TypeTagRange = (): void => _test_misc_validatePrune(
    "TypeTagRange",
)<TypeTagRange>(
    TypeTagRange
)((input) => typia.misc.validatePrune<TypeTagRange>(input));
