import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_TypeTagPattern = (): void => _test_misc_assertPrune(CustomGuardError)(
    "TypeTagPattern",
)<TypeTagPattern>(
    TypeTagPattern
)(typia.misc.createAssertPrune<TypeTagPattern>((p) => new CustomGuardError(p)));
