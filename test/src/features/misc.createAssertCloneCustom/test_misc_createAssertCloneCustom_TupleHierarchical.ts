import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_misc_createAssertCloneCustom_TupleHierarchical =
  _test_misc_assertClone(CustomGuardError)(
    "TupleHierarchical",
  )<TupleHierarchical>(TupleHierarchical)(
    typia.misc.createAssertClone<TupleHierarchical>(
      (p) => new CustomGuardError(p),
    ),
  );
