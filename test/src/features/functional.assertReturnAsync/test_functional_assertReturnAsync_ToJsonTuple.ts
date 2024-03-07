import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ToJsonTuple =
  _test_functional_assertReturnAsync(TypeGuardError)("ToJsonTuple")(
    ToJsonTuple,
  )((p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
    typia.functional.assertReturn(p),
  );
