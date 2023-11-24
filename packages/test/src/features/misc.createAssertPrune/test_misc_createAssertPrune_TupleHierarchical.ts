import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_misc_createAssertPrune_TupleHierarchical =
  _test_misc_assertPrune("TupleHierarchical")<TupleHierarchical>(
    TupleHierarchical,
  )(typia.misc.createAssertPrune<TupleHierarchical>());
