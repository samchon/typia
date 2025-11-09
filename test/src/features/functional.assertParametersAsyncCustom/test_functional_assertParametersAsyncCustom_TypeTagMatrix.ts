import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_TypeTagMatrix = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "TypeTagMatrix"
)(TypeTagMatrix)(
  (p: (input: TypeTagMatrix) => Promise<TypeTagMatrix>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)