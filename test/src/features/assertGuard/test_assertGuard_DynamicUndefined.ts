import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_assertGuard_DynamicUndefined = (): void =>
  _test_assertGuard(TypeGuardError)("DynamicUndefined")<DynamicUndefined>(
    DynamicUndefined,
  )((input) => typia.assertGuard<DynamicUndefined>(input));
