import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { UltimateUnion } from "../../structures/UltimateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_UltimateUnion = (): void => _test_assert(CustomGuardError)(
    "UltimateUnion",
)<UltimateUnion>(
    UltimateUnion
)(typia.createAssert<UltimateUnion>((p) => new CustomGuardError(p)));
