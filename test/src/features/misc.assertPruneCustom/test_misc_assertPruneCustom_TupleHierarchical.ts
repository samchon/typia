import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertPruneCustom_TupleHierarchical =
  _test_misc_assertPrune(CustomGuardError)(
    "TupleHierarchical",
  )<TupleHierarchical>(TupleHierarchical)((input) =>
    typia.misc.assertPrune<TupleHierarchical>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
