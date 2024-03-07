import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturnAsync_ToJsonTuple =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ToJsonTuple")(
    ToJsonTuple,
  )((p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
    typia.functional.assertEqualsReturn(p),
  );
