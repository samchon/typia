import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_TypeTagBigInt = (): void => _test_assertGuardEquals(TypeGuardError)(
    "TypeTagBigInt",
)<TypeTagBigInt>(
    TypeTagBigInt
)(typia.createAssertGuardEquals<TypeTagBigInt>());
