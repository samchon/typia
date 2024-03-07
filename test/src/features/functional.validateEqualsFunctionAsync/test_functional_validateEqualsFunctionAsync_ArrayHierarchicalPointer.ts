import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_functional_validateEqualsFunctionAsync_ArrayHierarchicalPointer =
  _test_functional_validateEqualsFunctionAsync("ArrayHierarchicalPointer")(
    ArrayHierarchicalPointer,
  )(
    (
      p: (input: ArrayHierarchicalPointer) => Promise<ArrayHierarchicalPointer>,
    ) => typia.functional.validateEqualsFunction(p),
  );
