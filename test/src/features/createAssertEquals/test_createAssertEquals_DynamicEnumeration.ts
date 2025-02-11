import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createAssertEquals_DynamicEnumeration = _test_assertEquals(
  TypeGuardError,
)("DynamicEnumeration")<DynamicEnumeration>(DynamicEnumeration)(
  typia.createAssertEquals<DynamicEnumeration>(),
);
