import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_assertGuardEquals_DynamicTag = _test_assertGuardEquals(
  TypeGuardError,
)("DynamicTag")<DynamicTag>(DynamicTag)((input) =>
  typia.assertGuardEquals<DynamicTag>(input),
);
