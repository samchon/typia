import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_TypeTagDefault = (): void => _test_misc_assertPrune(CustomGuardError)(
    "TypeTagDefault",
)<TypeTagDefault>(
    TypeTagDefault
)(typia.misc.createAssertPrune<TypeTagDefault>((p) => new CustomGuardError(p)));
