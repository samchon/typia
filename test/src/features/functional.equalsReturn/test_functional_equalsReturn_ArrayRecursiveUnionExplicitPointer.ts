import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_functional_equalsReturn_ArrayRecursiveUnionExplicitPointer =
  _test_functional_equalsReturn("ArrayRecursiveUnionExplicitPointer")(
    ArrayRecursiveUnionExplicitPointer,
  )(
    (
      p: (
        input: ArrayRecursiveUnionExplicitPointer,
      ) => ArrayRecursiveUnionExplicitPointer,
    ) => typia.functional.equalsReturn(p),
  );
