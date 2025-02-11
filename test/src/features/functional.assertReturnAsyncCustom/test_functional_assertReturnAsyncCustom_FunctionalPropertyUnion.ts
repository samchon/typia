import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_functional_assertReturnAsyncCustom_FunctionalPropertyUnion =
  _test_functional_assertReturnAsync(CustomGuardError)(
    "FunctionalPropertyUnion",
  )(FunctionalPropertyUnion)(
    (p: (input: FunctionalPropertyUnion) => Promise<FunctionalPropertyUnion>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
