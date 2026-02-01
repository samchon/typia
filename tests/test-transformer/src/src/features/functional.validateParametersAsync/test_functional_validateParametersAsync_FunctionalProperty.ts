import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_validateParametersAsync_FunctionalProperty = (): Promise<void> => _test_functional_validateParametersAsync(
  "FunctionalProperty"
)(FunctionalProperty)(
  (p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
    typia.functional.validateParameters(p),
)