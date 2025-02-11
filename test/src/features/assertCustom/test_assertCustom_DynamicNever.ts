import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicNever } from "../../structures/DynamicNever";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_DynamicNever = _test_assert(CustomGuardError)(
    "DynamicNever",
)<DynamicNever>(
    DynamicNever
)((input) => typia.assert<DynamicNever>(input, (p) => new CustomGuardError(p)));
