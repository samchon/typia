import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_functional_assertEqualsReturn_ArrayHierarchicalPointer =
  _test_functional_assertEqualsReturn(TypeGuardError)(
    "ArrayHierarchicalPointer",
  )(ArrayHierarchicalPointer)(
    (p: (input: ArrayHierarchicalPointer) => ArrayHierarchicalPointer) =>
      typia.functional.assertEqualsReturn(p),
  );
