import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicTree } from "../../structures/DynamicTree";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_DynamicTree = _test_assertGuard(
  CustomGuardError,
)("DynamicTree")<DynamicTree>(DynamicTree)(
  typia.createAssertGuard<DynamicTree>((p) => new CustomGuardError(p)),
);
