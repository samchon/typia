import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ToJsonTuple =
  _test_functional_assertParametersAsync(TypeGuardError)("ToJsonTuple")(
    ToJsonTuple,
  )((p: (input: ToJsonTuple) => Promise<ToJsonTuple>) =>
    typia.functional.assertParameters(p),
  );
