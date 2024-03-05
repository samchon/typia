import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_functional_validateParameters_ArrayHierarchicalPointer =
  _test_functional_validateParameters("ArrayHierarchicalPointer")(
    ArrayHierarchicalPointer,
  )((p: (input: ArrayHierarchicalPointer) => ArrayHierarchicalPointer) =>
    typia.functional.validateParameters(p),
  );
