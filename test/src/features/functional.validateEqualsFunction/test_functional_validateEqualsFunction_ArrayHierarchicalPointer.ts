import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_functional_validateEqualsFunction_ArrayHierarchicalPointer =
  _test_functional_validateEqualsFunction("ArrayHierarchicalPointer")(
    ArrayHierarchicalPointer,
  )((p: (input: ArrayHierarchicalPointer) => ArrayHierarchicalPointer) =>
    typia.functional.validateEqualsFunction(p),
  );
