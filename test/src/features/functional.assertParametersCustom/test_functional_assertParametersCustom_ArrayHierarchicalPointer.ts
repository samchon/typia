import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_functional_assertParametersCustom_ArrayHierarchicalPointer =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)(
      "ArrayHierarchicalPointer",
    )(ArrayHierarchicalPointer)(
      (p: (input: ArrayHierarchicalPointer) => ArrayHierarchicalPointer) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
