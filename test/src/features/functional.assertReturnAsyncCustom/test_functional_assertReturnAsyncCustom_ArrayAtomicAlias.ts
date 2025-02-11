import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_functional_assertReturnAsyncCustom_ArrayAtomicAlias =
  _test_functional_assertReturnAsync(CustomGuardError)("ArrayAtomicAlias")(
    ArrayAtomicAlias,
  )((p: (input: ArrayAtomicAlias) => Promise<ArrayAtomicAlias>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
