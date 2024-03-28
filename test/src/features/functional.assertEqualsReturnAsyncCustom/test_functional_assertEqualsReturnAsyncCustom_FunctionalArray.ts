import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_assertEqualsReturnAsyncCustom_FunctionalArray =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("FunctionalArray")(
    FunctionalArray,
  )((p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
