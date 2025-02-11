import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_TupleHierarchical = _test_functional_assertParametersAsync(TypeGuardError)(
  "TupleHierarchical"
)(TupleHierarchical)(
  (p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
    typia.functional.assertParameters(p),
)