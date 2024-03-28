import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_createAssertCustom_DynamicTree = _test_assert(
  CustomGuardError,
)("DynamicTree")<DynamicTree>(DynamicTree)(
  typia.createAssert<DynamicTree>((p) => new CustomGuardError(p)),
);
