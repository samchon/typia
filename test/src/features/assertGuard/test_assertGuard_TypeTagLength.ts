import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { TypeGuardError } from "typia";

export const test_assertGuard_TypeTagLength = (): void => _test_assertGuard(TypeGuardError)(
    "TypeTagLength",
)<TypeTagLength>(
    TypeTagLength
)((input) => typia.assertGuard<TypeTagLength>(input));
