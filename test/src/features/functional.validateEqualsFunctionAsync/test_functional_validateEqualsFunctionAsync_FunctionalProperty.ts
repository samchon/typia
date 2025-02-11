import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_validateEqualsFunctionAsync_FunctionalProperty = _test_functional_validateEqualsFunctionAsync(
  "FunctionalProperty"
)(FunctionalProperty)(
  (p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
    typia.functional.validateEqualsFunction(p),
)