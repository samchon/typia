import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_misc_createAssertClone_TupleHierarchical =
  _test_misc_assertClone(TypeGuardError)(
    "TupleHierarchical",
  )<TupleHierarchical>(TupleHierarchical)(
    typia.misc.createAssertClone<TupleHierarchical>(),
  );
