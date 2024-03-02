import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_createAssertGuard_DynamicNever = _test_assertGuard(
  TypeGuardError,
)("DynamicNever")<DynamicNever>(DynamicNever)(
  typia.createAssertGuard<DynamicNever>(),
);
