import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_functional_equalsParameters_ArrayRecursiveUnionExplicitPointer =
  _test_functional_equalsParameters("ArrayRecursiveUnionExplicitPointer")(
    ArrayRecursiveUnionExplicitPointer,
  )(
    (
      p: (
        input: ArrayRecursiveUnionExplicitPointer,
      ) => ArrayRecursiveUnionExplicitPointer,
    ) => typia.functional.equalsParameters(p),
  );
