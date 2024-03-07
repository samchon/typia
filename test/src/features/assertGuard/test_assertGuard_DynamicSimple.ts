import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicSimple } from "../../structures/DynamicSimple";

import { TypeGuardError } from "typia";

export const test_assertGuard_DynamicSimple = _test_assertGuard(TypeGuardError)(
  "DynamicSimple",
)<DynamicSimple>(DynamicSimple)((input) =>
  typia.assertGuard<DynamicSimple>(input),
);
