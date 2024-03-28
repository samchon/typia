import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_misc_assertCloneCustom_ArrayHierarchical =
  _test_misc_assertClone(CustomGuardError)(
    "ArrayHierarchical",
  )<ArrayHierarchical>(ArrayHierarchical)((input) =>
    typia.misc.assertClone<ArrayHierarchical>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
