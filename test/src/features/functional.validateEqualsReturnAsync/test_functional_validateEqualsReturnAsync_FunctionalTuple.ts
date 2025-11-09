import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_validateEqualsReturnAsync_FunctionalTuple = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "FunctionalTuple"
)(FunctionalTuple)(
  (p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
    typia.functional.validateEqualsReturn(p),
)