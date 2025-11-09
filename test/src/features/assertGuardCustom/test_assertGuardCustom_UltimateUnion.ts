import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { UltimateUnion } from "../../structures/UltimateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_UltimateUnion = (): void => _test_assertGuard(CustomGuardError)(
    "UltimateUnion",
)<UltimateUnion>(
    UltimateUnion
)((input) => typia.assertGuard<UltimateUnion>(input, (p) => new CustomGuardError(p)));
