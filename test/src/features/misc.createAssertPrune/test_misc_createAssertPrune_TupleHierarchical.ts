import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_misc_createAssertPrune_TupleHierarchical = (): void =>
  _test_misc_assertPrune(TypeGuardError)(
    "TupleHierarchical",
  )<TupleHierarchical>(TupleHierarchical)(
    typia.misc.createAssertPrune<TupleHierarchical>(),
  );
