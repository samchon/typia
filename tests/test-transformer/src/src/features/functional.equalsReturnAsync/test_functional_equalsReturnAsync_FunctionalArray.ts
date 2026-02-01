import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_equalsReturnAsync_FunctionalArray = (): Promise<void> => _test_functional_equalsReturnAsync(
  "FunctionalArray"
)(FunctionalArray)(
  (p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
    typia.functional.equalsReturn(p),
)