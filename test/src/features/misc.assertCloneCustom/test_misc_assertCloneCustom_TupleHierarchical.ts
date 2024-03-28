import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_misc_assertCloneCustom_TupleHierarchical =
  _test_misc_assertClone(CustomGuardError)(
    "TupleHierarchical",
  )<TupleHierarchical>(TupleHierarchical)((input) =>
    typia.misc.assertClone<TupleHierarchical>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
