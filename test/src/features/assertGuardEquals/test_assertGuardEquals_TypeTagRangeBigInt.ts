import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_TypeTagRangeBigInt = _test_assertGuardEquals(TypeGuardError)(
    "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(
    TypeTagRangeBigInt
)((input) => typia.assertGuardEquals<TypeTagRangeBigInt>(input));
