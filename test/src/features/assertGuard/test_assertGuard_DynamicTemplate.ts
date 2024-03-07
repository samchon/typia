import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

import { TypeGuardError } from "typia";

export const test_assertGuard_DynamicTemplate = _test_assertGuard(
  TypeGuardError,
)("DynamicTemplate")<DynamicTemplate>(DynamicTemplate)((input) =>
  typia.assertGuard<DynamicTemplate>(input),
);
