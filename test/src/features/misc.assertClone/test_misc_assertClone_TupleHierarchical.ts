import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_misc_assertClone_TupleHierarchical = (): void =>
  _test_misc_assertClone(TypeGuardError)(
    "TupleHierarchical",
  )<TupleHierarchical>(TupleHierarchical)((input) =>
    typia.misc.assertClone<TupleHierarchical>(input),
  );
