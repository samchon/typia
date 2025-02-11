import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayAny } from "../../structures/ArrayAny";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ArrayAny = _test_functional_assertReturnAsync(CustomGuardError)(
  "ArrayAny"
)(ArrayAny)(
  (p: (input: ArrayAny) => Promise<ArrayAny>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)