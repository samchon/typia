import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_misc_createAssertPruneCustom_TupleHierarchical = (): void =>
  _test_misc_assertPrune(CustomGuardError)(
    "TupleHierarchical",
  )<TupleHierarchical>(TupleHierarchical)(
    typia.misc.createAssertPrune<TupleHierarchical>(
      (p) => new CustomGuardError(p),
    ),
  );
