import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_TupleHierarchical =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("TupleHierarchical")(
    TupleHierarchical,
  )((p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
    typia.functional.assertEqualsReturn(p),
  );
