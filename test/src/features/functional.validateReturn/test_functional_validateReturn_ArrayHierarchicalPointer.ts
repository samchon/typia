import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_functional_validateReturn_ArrayHierarchicalPointer =
  _test_functional_validateReturn("ArrayHierarchicalPointer")(
    ArrayHierarchicalPointer,
  )((p: (input: ArrayHierarchicalPointer) => ArrayHierarchicalPointer) =>
    typia.functional.validateReturn(p),
  );
