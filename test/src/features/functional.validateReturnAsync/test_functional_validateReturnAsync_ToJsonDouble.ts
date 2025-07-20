import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_validateReturnAsync_ToJsonDouble =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("ToJsonDouble")(ToJsonDouble)(
      (p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
        typia.functional.validateReturn(p),
    );
