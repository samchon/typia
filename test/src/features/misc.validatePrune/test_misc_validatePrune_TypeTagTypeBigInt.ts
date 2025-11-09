import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_misc_validatePrune_TypeTagTypeBigInt = (): void => _test_misc_validatePrune(
    "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(
    TypeTagTypeBigInt
)((input) => typia.misc.validatePrune<TypeTagTypeBigInt>(input));
