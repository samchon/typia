import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_assertReturn_TupleHierarchical =
  _test_functional_assertReturn(TypeGuardError)("TupleHierarchical")(
    TupleHierarchical,
  )((p: (input: TupleHierarchical) => TupleHierarchical) =>
    typia.functional.assertReturn(p),
  );
