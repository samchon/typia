import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { UltimateUnion } from "../../structures/UltimateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_UltimateUnion = _test_assert(CustomGuardError)(
    "UltimateUnion",
)<UltimateUnion>(
    UltimateUnion
)((input) => typia.assert<UltimateUnion>(input, (p) => new CustomGuardError(p)));
