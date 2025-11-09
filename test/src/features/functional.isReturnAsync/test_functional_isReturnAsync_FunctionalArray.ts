import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_isReturnAsync_FunctionalArray = (): Promise<void> => _test_functional_isReturnAsync(
  "FunctionalArray"
)(FunctionalArray)(
  (p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
    typia.functional.isReturn(p),
)