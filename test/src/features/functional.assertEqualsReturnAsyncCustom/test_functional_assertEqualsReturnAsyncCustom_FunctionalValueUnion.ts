import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_functional_assertEqualsReturnAsyncCustom_FunctionalValueUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "FunctionalValueUnion",
    )(FunctionalValueUnion)(
      (p: (input: FunctionalValueUnion) => Promise<FunctionalValueUnion>) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
