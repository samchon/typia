import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { DynamicUnion } from "../../structures/DynamicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertPruneCustom_DynamicUnion = (): void => _test_misc_assertPrune(CustomGuardError)(
    "DynamicUnion",
)<DynamicUnion>(
    DynamicUnion
)(typia.misc.createAssertPrune<DynamicUnion>((p) => new CustomGuardError(p)));
