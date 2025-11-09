import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_TypeTagRangeBigInt = (): void => _test_misc_assertPrune(CustomGuardError)(
    "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(
    TypeTagRangeBigInt
)(typia.misc.createAssertPrune<TypeTagRangeBigInt>((p) => new CustomGuardError(p)));
