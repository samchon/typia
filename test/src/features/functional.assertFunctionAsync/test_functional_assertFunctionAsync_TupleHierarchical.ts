import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_assertFunctionAsync_TupleHierarchical =
  _test_functional_assertFunctionAsync(TypeGuardError)("TupleHierarchical")(
    TupleHierarchical,
  )((p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
    typia.functional.assertFunction(p),
  );
