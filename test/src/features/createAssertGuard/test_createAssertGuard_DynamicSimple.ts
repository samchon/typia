import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_createAssertGuard_DynamicSimple = _test_assertGuard(
  TypeGuardError,
)("DynamicSimple")<DynamicSimple>(DynamicSimple)(
  typia.createAssertGuard<DynamicSimple>(),
);
