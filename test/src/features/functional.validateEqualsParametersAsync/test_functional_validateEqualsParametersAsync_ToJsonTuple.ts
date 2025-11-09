import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_validateEqualsParametersAsync_ToJsonTuple = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "ToJsonTuple"
)(ToJsonTuple)(
  (p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
    typia.functional.validateEqualsParameters(p),
)