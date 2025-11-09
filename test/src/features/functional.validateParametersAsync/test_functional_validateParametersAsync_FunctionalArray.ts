import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_validateParametersAsync_FunctionalArray = (): Promise<void> => _test_functional_validateParametersAsync(
  "FunctionalArray"
)(FunctionalArray)(
  (p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
    typia.functional.validateParameters(p),
)