import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_functional_assertEqualsReturnAsyncCustom_FunctionalTuple =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "FunctionalTuple",
    )(FunctionalTuple)(
      (p: (input: FunctionalTuple) => Promise<FunctionalTuple>) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
