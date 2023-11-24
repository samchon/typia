import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_createAssertGuard_DynamicEnumeration = _test_assertGuard(
  "DynamicEnumeration",
)<DynamicEnumeration>(DynamicEnumeration)(
  typia.createAssertGuard<DynamicEnumeration>(),
);
