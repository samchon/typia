import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_equalsParametersAsync_FunctionalArray = (): Promise<void> => _test_functional_equalsParametersAsync(
  "FunctionalArray"
)(FunctionalArray)(
  (p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
    typia.functional.equalsParameters(p),
)