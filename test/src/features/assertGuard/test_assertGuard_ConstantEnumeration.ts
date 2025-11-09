import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_assertGuard_ConstantEnumeration = (): void =>
  _test_assertGuard(TypeGuardError)("ConstantEnumeration")<ConstantEnumeration>(
    ConstantEnumeration,
  )((input) => typia.assertGuard<ConstantEnumeration>(input));
