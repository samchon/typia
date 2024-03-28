import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_assertEqualsReturn_TupleHierarchical =
  _test_functional_assertEqualsReturn(TypeGuardError)("TupleHierarchical")(
    TupleHierarchical,
  )((p: (input: TupleHierarchical) => TupleHierarchical) =>
    typia.functional.assertEqualsReturn(p),
  );
