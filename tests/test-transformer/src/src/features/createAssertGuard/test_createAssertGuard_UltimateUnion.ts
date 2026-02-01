import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { UltimateUnion } from "../../structures/UltimateUnion";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_UltimateUnion = (): void => _test_assertGuard(TypeGuardError)(
    "UltimateUnion",
)<UltimateUnion>(
    UltimateUnion
)(typia.createAssertGuard<UltimateUnion>());
