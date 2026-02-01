import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_functional_validateEqualsParametersAsync_TupleHierarchical = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "TupleHierarchical"
)(TupleHierarchical)(
  (p: (input: TupleHierarchical) => Promise<TupleHierarchical>) =>
    typia.functional.validateEqualsParameters(p),
)