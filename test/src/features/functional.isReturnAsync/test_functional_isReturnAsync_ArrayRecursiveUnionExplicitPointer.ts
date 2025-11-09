import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_functional_isReturnAsync_ArrayRecursiveUnionExplicitPointer =
  (): Promise<void> =>
    _test_functional_isReturnAsync("ArrayRecursiveUnionExplicitPointer")(
      ArrayRecursiveUnionExplicitPointer,
    )(
      (
        p: (
          input: ArrayRecursiveUnionExplicitPointer,
        ) => Promise<ArrayRecursiveUnionExplicitPointer>,
      ) => typia.functional.isReturn(p),
    );
