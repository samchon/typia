import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_equalsParametersAsync_FunctionalTuple = (): Promise<void> => _test_functional_equalsParametersAsync(
  "FunctionalTuple"
)(FunctionalTuple)(
  (p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
    typia.functional.equalsParameters(p),
)