import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_functional_assertEqualsReturnAsyncCustom_FunctionalArrayUnion =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "FunctionalArrayUnion",
  )(FunctionalArrayUnion)(
    (p: (input: FunctionalArrayUnion) => Promise<FunctionalArrayUnion>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
