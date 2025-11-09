import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ArrayRepeatedRequired = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "ArrayRepeatedRequired"
)(ArrayRepeatedRequired)(
  (p: (input: ArrayRepeatedRequired) => Promise<ArrayRepeatedRequired>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)