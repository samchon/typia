import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_misc_assertCloneCustom_ArrayHierarchicalPointer =
  _test_misc_assertClone(CustomGuardError)(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)((input) =>
    typia.misc.assertClone<ArrayHierarchicalPointer>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
