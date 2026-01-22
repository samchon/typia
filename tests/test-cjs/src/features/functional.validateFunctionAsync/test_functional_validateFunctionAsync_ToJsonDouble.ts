import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_functional_validateFunctionAsync_ToJsonDouble =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("ToJsonDouble")(ToJsonDouble)(
      (p: (input: ToJsonDouble) => Promise<ToJsonDouble>) =>
        typia.functional.validateFunction(p),
    );
