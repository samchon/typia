import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_assertGuardEqualsCustom_TupleHierarchical = (): void =>
  _test_assertGuardEquals(CustomGuardError)(
    "TupleHierarchical",
  )<TupleHierarchical>(TupleHierarchical)((input) =>
    typia.assertGuardEquals<TupleHierarchical>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
