import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { FunctionalValue } from "../../structures/FunctionalValue";

export const test_functional_assertReturnAsyncCustom_FunctionalValue =
  _test_functional_assertReturnAsync(CustomGuardError)("FunctionalValue")(
    FunctionalValue,
  )((p: (input: FunctionalValue) => Promise<FunctionalValue>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
