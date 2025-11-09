import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicSimple } from "../../structures/DynamicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_DynamicSimple = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "DynamicSimple"
)(DynamicSimple)(
  (p: (input: DynamicSimple) => Promise<DynamicSimple>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)