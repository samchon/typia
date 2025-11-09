import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_TypeTagTypeBigInt = (): void => _test_assertGuard(TypeGuardError)(
    "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(
    TypeTagTypeBigInt
)(typia.createAssertGuard<TypeTagTypeBigInt>());
