import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_DynamicUndefined = _test_assert(CustomGuardError)(
    "DynamicUndefined",
)<DynamicUndefined>(
    DynamicUndefined
)((input) => typia.assert<DynamicUndefined>(input, (p) => new CustomGuardError(p)));
