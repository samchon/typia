import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_validateEqualsParametersAsync_FunctionalArray = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "FunctionalArray"
)(FunctionalArray)(
  (p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
    typia.functional.validateEqualsParameters(p),
)