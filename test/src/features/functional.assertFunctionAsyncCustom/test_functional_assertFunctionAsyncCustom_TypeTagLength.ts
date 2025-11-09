import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_TypeTagLength = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "TypeTagLength"
)(TypeTagLength)(
  (p: (input: TypeTagLength) => Promise<TypeTagLength>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)