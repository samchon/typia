import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { UltimateUnion } from "../../structures/UltimateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_UltimateUnion = _test_assertGuard(CustomGuardError)(
    "UltimateUnion",
)<UltimateUnion>(
    UltimateUnion
)(typia.createAssertGuard<UltimateUnion>((p) => new CustomGuardError(p)));
