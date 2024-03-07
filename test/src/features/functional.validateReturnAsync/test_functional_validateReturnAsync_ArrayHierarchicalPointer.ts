import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_functional_validateReturnAsync_ArrayHierarchicalPointer =
  _test_functional_validateReturnAsync("ArrayHierarchicalPointer")(
    ArrayHierarchicalPointer,
  )(
    (
      p: (input: ArrayHierarchicalPointer) => Promise<ArrayHierarchicalPointer>,
    ) => typia.functional.validateReturn(p),
  );
