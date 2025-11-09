import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_functional_isFunctionAsync_ArrayHierarchicalPointer =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("ArrayHierarchicalPointer")(
      ArrayHierarchicalPointer,
    )(
      (
        p: (
          input: ArrayHierarchicalPointer,
        ) => Promise<ArrayHierarchicalPointer>,
      ) => typia.functional.isFunction(p),
    );
