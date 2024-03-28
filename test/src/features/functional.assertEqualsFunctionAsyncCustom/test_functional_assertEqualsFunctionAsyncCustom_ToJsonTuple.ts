import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_assertEqualsFunctionAsyncCustom_ToJsonTuple =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)("ToJsonTuple")(
    ToJsonTuple,
  )((p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
