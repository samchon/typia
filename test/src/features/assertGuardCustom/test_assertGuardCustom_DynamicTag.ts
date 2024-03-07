import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicTag } from "../../structures/DynamicTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_DynamicTag = _test_assertGuard(
  CustomGuardError,
)("DynamicTag")<DynamicTag>(DynamicTag)((input) =>
  typia.assertGuard<DynamicTag>(input, (p) => new CustomGuardError(p)),
);
