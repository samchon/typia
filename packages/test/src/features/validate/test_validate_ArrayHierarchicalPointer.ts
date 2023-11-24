import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_validate_ArrayHierarchicalPointer = _test_validate(
  "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)((input) =>
  typia.validate<ArrayHierarchicalPointer>(input),
);
