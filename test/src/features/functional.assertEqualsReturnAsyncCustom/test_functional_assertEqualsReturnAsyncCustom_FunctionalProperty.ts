import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_assertEqualsReturnAsyncCustom_FunctionalProperty =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "FunctionalProperty",
  )(FunctionalProperty)(
    (p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
