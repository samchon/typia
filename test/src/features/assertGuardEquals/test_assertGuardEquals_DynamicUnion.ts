import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_assertGuardEquals_DynamicUnion = _test_assertGuardEquals(
  TypeGuardError,
)("DynamicUnion")<DynamicUnion>(DynamicUnion)((input) =>
  typia.assertGuardEquals<DynamicUnion>(input),
);
