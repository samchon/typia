import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_misc_createValidatePrune_TypeTagBigInt = (): void => _test_misc_validatePrune(
    "TypeTagBigInt",
)<TypeTagBigInt>(
    TypeTagBigInt
)(typia.misc.createValidatePrune<TypeTagBigInt>());
