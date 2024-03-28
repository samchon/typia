import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createAssert_DynamicEnumeration = _test_assert(
  TypeGuardError,
)("DynamicEnumeration")<DynamicEnumeration>(DynamicEnumeration)(
  typia.createAssert<DynamicEnumeration>(),
);
