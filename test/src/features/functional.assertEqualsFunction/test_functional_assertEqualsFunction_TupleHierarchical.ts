import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_assertEqualsFunction_TupleHierarchical =
  _test_functional_assertEqualsFunction(TypeGuardError)("TupleHierarchical")(
    TupleHierarchical,
  )((p: (input: TupleHierarchical) => TupleHierarchical) =>
    typia.functional.assertEqualsFunction(p),
  );
