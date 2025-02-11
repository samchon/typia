import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_isParametersAsync_FunctionalProperty = _test_functional_isParametersAsync(
  "FunctionalProperty"
)(FunctionalProperty)(
  (p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
    typia.functional.isParameters(p),
)