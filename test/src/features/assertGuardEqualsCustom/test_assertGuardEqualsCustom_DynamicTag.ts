import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_assertGuardEqualsCustom_DynamicTag = _test_assertGuardEquals(
  CustomGuardError,
)("DynamicTag")<DynamicTag>(DynamicTag)((input) =>
  typia.assertGuardEquals<DynamicTag>(input, (p) => new CustomGuardError(p)),
);
