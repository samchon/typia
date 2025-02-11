import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_assertReturnAsyncCustom_ArrayRecursive =
  _test_functional_assertReturnAsync(CustomGuardError)("ArrayRecursive")(
    ArrayRecursive,
  )((p: (input: ArrayRecursive) => Promise<ArrayRecursive>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
