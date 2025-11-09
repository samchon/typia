import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicUnion } from "../../structures/DynamicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_DynamicUnion = (): void => _test_assertGuard(CustomGuardError)(
    "DynamicUnion",
)<DynamicUnion>(
    DynamicUnion
)(typia.createAssertGuard<DynamicUnion>((p) => new CustomGuardError(p)));
