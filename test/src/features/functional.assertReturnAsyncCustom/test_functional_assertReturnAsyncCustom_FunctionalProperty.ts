import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_functional_assertReturnAsyncCustom_FunctionalProperty =
  _test_functional_assertReturnAsync(CustomGuardError)("FunctionalProperty")(
    FunctionalProperty,
  )((p: (input: FunctionalProperty) => Promise<FunctionalProperty>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
