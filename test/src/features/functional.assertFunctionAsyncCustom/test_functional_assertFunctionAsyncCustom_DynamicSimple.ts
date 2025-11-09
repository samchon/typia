import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { DynamicSimple } from "../../structures/DynamicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_DynamicSimple = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "DynamicSimple"
)(DynamicSimple)(
  (p: (input: DynamicSimple) => Promise<DynamicSimple>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)