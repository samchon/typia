import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_TupleHierarchical = _test_functional_assertFunctionAsync(TypeGuardError)(
  "TupleHierarchical"
)(TupleHierarchical)(
  (p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
    typia.functional.assertFunction(p),
)