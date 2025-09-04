import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createAssertGuardEquals_DynamicEnumeration = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "DynamicEnumeration",
  )<DynamicEnumeration>(DynamicEnumeration)(
    typia.createAssertGuardEquals<DynamicEnumeration>(),
  );
