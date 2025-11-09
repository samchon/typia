import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicNever } from "../../structures/DynamicNever";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_DynamicNever = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "DynamicNever"
)(DynamicNever)(
  (p: (input: DynamicNever) => Promise<DynamicNever>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)