import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_functional_validateFunction_ArrayRecursiveUnionExplicitPointer =
  _test_functional_validateFunction("ArrayRecursiveUnionExplicitPointer")(
    ArrayRecursiveUnionExplicitPointer,
  )(
    (
      p: (
        input: ArrayRecursiveUnionExplicitPointer,
      ) => ArrayRecursiveUnionExplicitPointer,
    ) => typia.functional.validateFunction(p),
  );
