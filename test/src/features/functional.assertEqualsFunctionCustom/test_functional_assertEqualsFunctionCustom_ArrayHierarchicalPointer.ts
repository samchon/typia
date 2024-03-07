import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_ArrayHierarchicalPointer =
  _test_functional_assertEqualsFunction(CustomGuardError)(
    "ArrayHierarchicalPointer",
  )(ArrayHierarchicalPointer)(
    (p: (input: ArrayHierarchicalPointer) => ArrayHierarchicalPointer) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
