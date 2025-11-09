import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { TypeGuardError } from "typia";

export const test_assertGuard_TypeTagNaN = (): void => _test_assertGuard(TypeGuardError)(
    "TypeTagNaN",
)<TypeTagNaN>(
    TypeTagNaN
)((input) => typia.assertGuard<TypeTagNaN>(input));
