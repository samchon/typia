import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_DynamicUndefined = _test_assert(CustomGuardError)(
    "DynamicUndefined",
)<DynamicUndefined>(
    DynamicUndefined
)(typia.createAssert<DynamicUndefined>((p) => new CustomGuardError(p)));
