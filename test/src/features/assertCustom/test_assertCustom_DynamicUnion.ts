import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicUnion } from "../../structures/DynamicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_DynamicUnion = (): void => _test_assert(CustomGuardError)(
    "DynamicUnion",
)<DynamicUnion>(
    DynamicUnion
)((input) => typia.assert<DynamicUnion>(input, (p) => new CustomGuardError(p)));
