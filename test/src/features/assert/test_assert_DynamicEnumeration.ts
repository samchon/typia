import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_assert_DynamicEnumeration = _test_assert(TypeGuardError)(
  "DynamicEnumeration",
)<DynamicEnumeration>(DynamicEnumeration)((input) =>
  typia.assert<DynamicEnumeration>(input),
);
