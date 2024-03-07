import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicTag } from "../../structures/DynamicTag";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_DynamicTag = _test_assertGuardEquals(
  CustomGuardError,
)("DynamicTag")<DynamicTag>(DynamicTag)((input) =>
  typia.assertGuardEquals<DynamicTag>(input, (p) => new CustomGuardError(p)),
);
