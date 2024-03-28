import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_functional_assertFunctionAsyncCustom_FunctionalArray =
  _test_functional_assertFunctionAsync(CustomGuardError)("FunctionalArray")(
    FunctionalArray,
  )((p: (input: FunctionalArray) => Promise<FunctionalArray>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
