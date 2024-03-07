import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_functional_validateFunctionAsync_ArrayHierarchicalPointer =
  _test_functional_validateFunctionAsync("ArrayHierarchicalPointer")(
    ArrayHierarchicalPointer,
  )(
    (
      p: (input: ArrayHierarchicalPointer) => Promise<ArrayHierarchicalPointer>,
    ) => typia.functional.validateFunction(p),
  );
