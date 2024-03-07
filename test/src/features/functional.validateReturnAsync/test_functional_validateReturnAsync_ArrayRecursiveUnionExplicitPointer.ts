import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_functional_validateReturnAsync_ArrayRecursiveUnionExplicitPointer =
  _test_functional_validateReturnAsync("ArrayRecursiveUnionExplicitPointer")(
    ArrayRecursiveUnionExplicitPointer,
  )(
    (
      p: (
        input: ArrayRecursiveUnionExplicitPointer,
      ) => Promise<ArrayRecursiveUnionExplicitPointer>,
    ) => typia.functional.validateReturn(p),
  );
