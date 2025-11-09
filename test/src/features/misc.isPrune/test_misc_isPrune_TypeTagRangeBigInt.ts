import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_misc_isPrune_TypeTagRangeBigInt = (): void => _test_misc_isPrune(
    "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(
    TypeTagRangeBigInt
)((input) => typia.misc.isPrune<TypeTagRangeBigInt>(input));
