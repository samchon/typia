import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_functional_assertFunction_ArrayHierarchicalPointer =
  _test_functional_assertFunction(TypeGuardError)("ArrayHierarchicalPointer")(
    ArrayHierarchicalPointer,
  )((p: (input: ArrayHierarchicalPointer) => ArrayHierarchicalPointer) =>
    typia.functional.assertFunction(p),
  );
