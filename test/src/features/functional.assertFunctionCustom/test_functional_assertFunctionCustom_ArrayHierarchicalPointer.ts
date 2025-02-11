import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ArrayHierarchicalPointer = _test_functional_assertFunction(CustomGuardError)(
  "ArrayHierarchicalPointer"
)(ArrayHierarchicalPointer)(
  (p: (input: ArrayHierarchicalPointer) => ArrayHierarchicalPointer) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)