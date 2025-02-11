import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_functional_assertEqualsFunctionAsync_ToJsonTuple =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)("ToJsonTuple")(
    ToJsonTuple,
  )((p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
    typia.functional.assertEqualsFunction(p),
  );
