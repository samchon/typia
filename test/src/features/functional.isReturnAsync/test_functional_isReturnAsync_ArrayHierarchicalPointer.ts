import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_functional_isReturnAsync_ArrayHierarchicalPointer =
  (): Promise<void> =>
    _test_functional_isReturnAsync("ArrayHierarchicalPointer")(
      ArrayHierarchicalPointer,
    )(
      (
        p: (
          input: ArrayHierarchicalPointer,
        ) => Promise<ArrayHierarchicalPointer>,
      ) => typia.functional.isReturn(p),
    );
