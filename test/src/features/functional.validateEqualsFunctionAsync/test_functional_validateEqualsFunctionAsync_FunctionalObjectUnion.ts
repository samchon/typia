import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_functional_validateEqualsFunctionAsync_FunctionalObjectUnion = (): Promise<void> => _test_functional_validateEqualsFunctionAsync(
  "FunctionalObjectUnion"
)(FunctionalObjectUnion)(
  (p: (input: FunctionalObjectUnion) => Promise<FunctionalObjectUnion>) =>
    typia.functional.validateEqualsFunction(p),
)