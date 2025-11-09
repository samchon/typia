import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

import { TypeGuardError } from "typia";

export const test_misc_assertPrune_TypeTagDefault = (): void => _test_misc_assertPrune(TypeGuardError)(
    "TypeTagDefault",
)<TypeTagDefault>(
    TypeTagDefault
)((input) => typia.misc.assertPrune<TypeTagDefault>(input));
