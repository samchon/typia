import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_assertParametersAsync_FunctionalTuple =
  _test_functional_assertParametersAsync(TypeGuardError)("FunctionalTuple")(
    FunctionalTuple,
  )((p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
    typia.functional.assertParameters(p),
  );
