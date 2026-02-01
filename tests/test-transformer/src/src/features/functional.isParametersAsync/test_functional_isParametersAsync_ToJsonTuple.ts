import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_isParametersAsync_ToJsonTuple = (): Promise<void> => _test_functional_isParametersAsync(
  "ToJsonTuple"
)(ToJsonTuple)(
  (p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
    typia.functional.isParameters(p),
)