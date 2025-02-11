import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_createAssertCustom_DynamicUndefined = _test_assert(
  CustomGuardError,
)("DynamicUndefined")<DynamicUndefined>(DynamicUndefined)(
  typia.createAssert<DynamicUndefined>((p) => new CustomGuardError(p)),
);
