import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_TypeTagInfinite = (): void => _test_misc_assertPrune(TypeGuardError)(
    "TypeTagInfinite",
)<TypeTagInfinite>(
    TypeTagInfinite
)(typia.misc.createAssertPrune<TypeTagInfinite>());
