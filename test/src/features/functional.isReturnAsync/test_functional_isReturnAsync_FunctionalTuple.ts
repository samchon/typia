import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_isReturnAsync_FunctionalTuple = _test_functional_isReturnAsync(
  "FunctionalTuple"
)(FunctionalTuple)(
  (p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
    typia.functional.isReturn(p),
)