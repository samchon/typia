import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_TypeTagArray = (): void => _test_assertGuard(TypeGuardError)(
    "TypeTagArray",
)<TypeTagArray>(
    TypeTagArray
)(typia.createAssertGuard<TypeTagArray>());
