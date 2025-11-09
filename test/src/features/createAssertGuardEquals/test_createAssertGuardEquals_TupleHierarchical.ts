import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createAssertGuardEquals_TupleHierarchical = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "TupleHierarchical",
  )<TupleHierarchical>(TupleHierarchical)(
    typia.createAssertGuardEquals<TupleHierarchical>(),
  );
