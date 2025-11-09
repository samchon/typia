import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_validateEqualsReturnAsync_ToJsonTuple =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("ToJsonTuple")(ToJsonTuple)(
      (p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
        typia.functional.validateEqualsReturn(p),
    );
