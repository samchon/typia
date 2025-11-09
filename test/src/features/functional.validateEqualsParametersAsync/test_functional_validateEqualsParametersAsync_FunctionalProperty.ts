import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_validateEqualsParametersAsync_FunctionalProperty = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "FunctionalProperty"
)(FunctionalProperty)(
  (p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
    typia.functional.validateEqualsParameters(p),
)