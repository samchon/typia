import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_TypeTagLength = (): void => _test_misc_assertPrune(CustomGuardError)(
    "TypeTagLength",
)<TypeTagLength>(
    TypeTagLength
)(typia.misc.createAssertPrune<TypeTagLength>((p) => new CustomGuardError(p)));
