import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_TypeTagArray = (): void => _test_misc_assertPrune(CustomGuardError)(
    "TypeTagArray",
)<TypeTagArray>(
    TypeTagArray
)((input) => typia.misc.assertPrune<TypeTagArray>(input, (p) => new CustomGuardError(p)));
