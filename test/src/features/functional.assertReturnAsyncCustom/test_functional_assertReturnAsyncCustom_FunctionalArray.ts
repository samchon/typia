import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_assertReturnAsyncCustom_FunctionalArray =
  _test_functional_assertReturnAsync(CustomGuardError)("FunctionalArray")(
    FunctionalArray,
  )((p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
