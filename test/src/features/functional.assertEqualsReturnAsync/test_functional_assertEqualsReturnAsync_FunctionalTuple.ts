import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_assertEqualsReturnAsync_FunctionalTuple =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("FunctionalTuple")(
    FunctionalTuple,
  )((p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
    typia.functional.assertEqualsReturn(p),
  );
