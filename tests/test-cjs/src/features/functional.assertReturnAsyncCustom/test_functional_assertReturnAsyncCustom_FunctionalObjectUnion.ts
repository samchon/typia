import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_functional_assertReturnAsyncCustom_FunctionalObjectUnion =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)(
      "FunctionalObjectUnion",
    )(FunctionalObjectUnion)(
      (p: (input: FunctionalObjectUnion) => Promise<FunctionalObjectUnion>) =>
        typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
