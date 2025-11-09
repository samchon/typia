import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_equalsFunctionAsync_ToJsonDouble = (): Promise<void> => _test_functional_equalsFunctionAsync(
  "ToJsonDouble"
)(ToJsonDouble)(
  (p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
    typia.functional.equalsFunction(p),
)