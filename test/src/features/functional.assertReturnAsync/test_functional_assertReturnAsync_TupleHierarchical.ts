import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_assertReturnAsync_TupleHierarchical =
  _test_functional_assertReturnAsync(TypeGuardError)("TupleHierarchical")(
    TupleHierarchical,
  )((p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
    typia.functional.assertReturn(p),
  );
