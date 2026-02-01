import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_validateEqualsReturnAsync_ToJsonDouble = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "ToJsonDouble"
)(ToJsonDouble)(
  (p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
    typia.functional.validateEqualsReturn(p),
)