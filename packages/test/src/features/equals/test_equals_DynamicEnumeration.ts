import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_equals_DynamicEnumeration = _test_equals(
  "DynamicEnumeration",
)<DynamicEnumeration>(DynamicEnumeration)((input) =>
  typia.equals<DynamicEnumeration>(input),
);
