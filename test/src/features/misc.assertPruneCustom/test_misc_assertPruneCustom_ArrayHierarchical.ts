import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_misc_assertPruneCustom_ArrayHierarchical =
  _test_misc_assertPrune(CustomGuardError)(
    "ArrayHierarchical",
  )<ArrayHierarchical>(ArrayHierarchical)((input) =>
    typia.misc.assertPrune<ArrayHierarchical>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
