import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_TypeTagNaN = (): void => _test_misc_assertPrune(TypeGuardError)(
    "TypeTagNaN",
)<TypeTagNaN>(
    TypeTagNaN
)((input) => typia.misc.assertPrune<TypeTagNaN>(input));
