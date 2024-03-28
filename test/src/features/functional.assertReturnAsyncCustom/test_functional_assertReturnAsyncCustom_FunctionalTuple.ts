import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_assertReturnAsyncCustom_FunctionalTuple =
  _test_functional_assertReturnAsync(CustomGuardError)("FunctionalTuple")(
    FunctionalTuple,
  )((p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
