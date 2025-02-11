import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_createValidateEquals_ArrayHierarchical = _test_validateEquals(
  "ArrayHierarchical",
)<ArrayHierarchical>(ArrayHierarchical)(
  typia.createValidateEquals<ArrayHierarchical>(),
);
