import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createAssertGuard_DynamicEnumeration = (): void =>
  _test_assertGuard(TypeGuardError)("DynamicEnumeration")<DynamicEnumeration>(
    DynamicEnumeration,
  )(typia.createAssertGuard<DynamicEnumeration>());
