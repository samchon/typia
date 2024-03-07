import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

import { TypeGuardError } from "typia";

export const test_assertGuard_DynamicUndefined = _test_assertGuard(
  TypeGuardError,
)("DynamicUndefined")<DynamicUndefined>(DynamicUndefined)((input) =>
  typia.assertGuard<DynamicUndefined>(input),
);
