import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_validateEqualsFunctionAsync_ToJsonTuple =
  (): Promise<void> =>
    _test_functional_validateEqualsFunctionAsync("ToJsonTuple")(ToJsonTuple)(
      (p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
        typia.functional.validateEqualsFunction(p),
    );
