import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_ArrayHierarchicalPointer =
  _test_assertGuardEquals(CustomGuardError)(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)((input) =>
    typia.assertGuardEquals<ArrayHierarchicalPointer>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
