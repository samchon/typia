import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_assertReturnAsync_ToJsonNull = (): Promise<void> =>
  _test_functional_assertReturnAsync(TypeGuardError)("ToJsonNull")(ToJsonNull)(
    (p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
      typia.functional.assertReturn(p),
  );
