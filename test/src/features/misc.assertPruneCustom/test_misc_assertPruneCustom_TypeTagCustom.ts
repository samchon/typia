import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_TypeTagCustom = (): void => _test_misc_assertPrune(CustomGuardError)(
    "TypeTagCustom",
)<TypeTagCustom>(
    TypeTagCustom
)((input) => typia.misc.assertPrune<TypeTagCustom>(input, (p) => new CustomGuardError(p)));
