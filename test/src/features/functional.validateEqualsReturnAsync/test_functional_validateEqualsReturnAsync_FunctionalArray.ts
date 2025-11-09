import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_validateEqualsReturnAsync_FunctionalArray = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "FunctionalArray"
)(FunctionalArray)(
  (p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
    typia.functional.validateEqualsReturn(p),
)