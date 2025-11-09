import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_TypeTagBigInt = (): void => _test_misc_assertPrune(TypeGuardError)(
    "TypeTagBigInt",
)<TypeTagBigInt>(
    TypeTagBigInt
)(typia.misc.createAssertPrune<TypeTagBigInt>());
