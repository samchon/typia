import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicTree } from "../../structures/DynamicTree";

export const test_assertGuardCustom_DynamicTree = _test_assertGuard(
  CustomGuardError,
)("DynamicTree")<DynamicTree>(DynamicTree)((input) =>
  typia.assertGuard<DynamicTree>(input, (p) => new CustomGuardError(p)),
);
