import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_functional_assertEqualsFunctionCustom_ArrayHierarchicalPointer =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)(
      "ArrayHierarchicalPointer",
    )(ArrayHierarchicalPointer)(
      (p: (input: ArrayHierarchicalPointer) => ArrayHierarchicalPointer) =>
        typia.functional.assertEqualsFunction(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
