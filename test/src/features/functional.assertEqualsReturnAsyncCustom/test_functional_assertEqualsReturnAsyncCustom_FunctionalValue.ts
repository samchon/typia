import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertEqualsReturnAsyncCustom_FunctionalValue =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("FunctionalValue")(
    FunctionalValue,
  )((p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
