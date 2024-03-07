import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicTag } from "../../structures/DynamicTag";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_DynamicTag = _test_assertGuardEquals(
  TypeGuardError,
)("DynamicTag")<DynamicTag>(DynamicTag)((input) =>
  typia.assertGuardEquals<DynamicTag>(input),
);
