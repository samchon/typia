import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ToJsonUnion = (): void => _test_assert(CustomGuardError)(
    "ToJsonUnion",
)<ToJsonUnion>(
    ToJsonUnion
)((input) => typia.assert<ToJsonUnion>(input, (p) => new CustomGuardError(p)));
