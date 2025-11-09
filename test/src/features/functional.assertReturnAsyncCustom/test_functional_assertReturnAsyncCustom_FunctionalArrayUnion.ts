import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_functional_assertReturnAsyncCustom_FunctionalArrayUnion =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)(
      "FunctionalArrayUnion",
    )(FunctionalArrayUnion)(
      (p: (input: FunctionalArrayUnion) => Promise<FunctionalArrayUnion>) =>
        typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
