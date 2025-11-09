import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_TypeTagArray = (): void => _test_misc_assertPrune(TypeGuardError)(
    "TypeTagArray",
)<TypeTagArray>(
    TypeTagArray
)((input) => typia.misc.assertPrune<TypeTagArray>(input));
