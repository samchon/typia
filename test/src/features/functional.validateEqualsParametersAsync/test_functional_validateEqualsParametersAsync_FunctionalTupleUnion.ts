import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";

export const test_functional_validateEqualsParametersAsync_FunctionalTupleUnion = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "FunctionalTupleUnion"
)(FunctionalTupleUnion)(
  (p: (input: FunctionalTupleUnion) => Promise<FunctionalTupleUnion>) =>
    typia.functional.validateEqualsParameters(p),
)