import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_validateEqualsReturnAsync_ToJsonNull =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("ToJsonNull")(ToJsonNull)(
      (p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
        typia.functional.validateEqualsReturn(p),
    );
