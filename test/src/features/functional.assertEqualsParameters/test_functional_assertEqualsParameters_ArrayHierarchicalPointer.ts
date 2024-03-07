import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_ArrayHierarchicalPointer =
  _test_functional_assertEqualsParameters(TypeGuardError)(
    "ArrayHierarchicalPointer",
  )(ArrayHierarchicalPointer)(
    (p: (input: ArrayHierarchicalPointer) => ArrayHierarchicalPointer) =>
      typia.functional.assertEqualsParameters(p),
  );
