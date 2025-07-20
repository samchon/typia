import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_functional_validateFunction_ArrayHierarchicalPointer =
  (): void =>
    _test_functional_validateFunction("ArrayHierarchicalPointer")(
      ArrayHierarchicalPointer,
    )((p: (input: ArrayHierarchicalPointer) => ArrayHierarchicalPointer) =>
      typia.functional.validateFunction(p),
    );
