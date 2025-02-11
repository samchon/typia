import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_functional_equalsParameters_ArrayHierarchicalPointer =
  _test_functional_equalsParameters("ArrayHierarchicalPointer")(
    ArrayHierarchicalPointer,
  )((p: (input: ArrayHierarchicalPointer) => ArrayHierarchicalPointer) =>
    typia.functional.equalsParameters(p),
  );
