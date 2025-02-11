import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_functional_assertEqualsReturnAsync_ToJsonNull =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ToJsonNull")(
    ToJsonNull,
  )((p: (input: ToJsonNull) => Promise<ToJsonNull>) =>
    typia.functional.assertEqualsReturn(p),
  );
