import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_misc_createAssertCloneCustom_ArrayHierarchical =
  _test_misc_assertClone(CustomGuardError)(
    "ArrayHierarchical",
  )<ArrayHierarchical>(ArrayHierarchical)(
    typia.misc.createAssertClone<ArrayHierarchical>(
      (p) => new CustomGuardError(p),
    ),
  );
