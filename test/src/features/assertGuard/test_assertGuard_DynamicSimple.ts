import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_assertGuard_DynamicSimple = (): void =>
  _test_assertGuard(TypeGuardError)("DynamicSimple")<DynamicSimple>(
    DynamicSimple,
  )((input) => typia.assertGuard<DynamicSimple>(input));
