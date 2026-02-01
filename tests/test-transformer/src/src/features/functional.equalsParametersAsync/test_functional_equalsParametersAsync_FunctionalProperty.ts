import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_equalsParametersAsync_FunctionalProperty = (): Promise<void> => _test_functional_equalsParametersAsync(
  "FunctionalProperty"
)(FunctionalProperty)(
  (p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
    typia.functional.equalsParameters(p),
)