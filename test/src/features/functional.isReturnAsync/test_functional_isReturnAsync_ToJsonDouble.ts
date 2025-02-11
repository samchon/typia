import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_isReturnAsync_ToJsonDouble = _test_functional_isReturnAsync(
  "ToJsonDouble"
)(ToJsonDouble)(
  (p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
    typia.functional.isReturn(p),
)