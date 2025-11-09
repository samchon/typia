import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_FunctionalTuple = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "FunctionalTuple"
)(FunctionalTuple)(
  (p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)