import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_validate_ArrayHierarchical = _test_validate(
  "ArrayHierarchical",
)<ArrayHierarchical>(ArrayHierarchical)((input) =>
  typia.validate<ArrayHierarchical>(input),
);
