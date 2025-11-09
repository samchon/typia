import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_TypeTagArray = (): void => _test_assertGuardEquals(TypeGuardError)(
    "TypeTagArray",
)<TypeTagArray>(
    TypeTagArray
)((input) => typia.assertGuardEquals<TypeTagArray>(input));
