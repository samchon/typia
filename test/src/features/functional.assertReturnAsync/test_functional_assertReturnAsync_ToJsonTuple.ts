import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_assertReturnAsync_ToJsonTuple =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("ToJsonTuple")(
      ToJsonTuple,
    )((p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
      typia.functional.assertReturn(p),
    );
