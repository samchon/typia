import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createAssertGuardEqualsCustom_TupleHierarchical =
  _test_assertGuardEquals(CustomGuardError)(
    "TupleHierarchical",
  )<TupleHierarchical>(TupleHierarchical)(
    typia.createAssertGuardEquals<TupleHierarchical>(
      (p) => new CustomGuardError(p),
    ),
  );
