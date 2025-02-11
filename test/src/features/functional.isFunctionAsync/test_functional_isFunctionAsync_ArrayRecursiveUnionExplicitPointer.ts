import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_functional_isFunctionAsync_ArrayRecursiveUnionExplicitPointer =
  _test_functional_isFunctionAsync("ArrayRecursiveUnionExplicitPointer")(
    ArrayRecursiveUnionExplicitPointer,
  )(
    (
      p: (
        input: ArrayRecursiveUnionExplicitPointer,
      ) => Promise<ArrayRecursiveUnionExplicitPointer>,
    ) => typia.functional.isFunction(p),
  );
