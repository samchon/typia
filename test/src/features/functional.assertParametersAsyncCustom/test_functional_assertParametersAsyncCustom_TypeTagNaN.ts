import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_TypeTagNaN = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "TypeTagNaN"
)(TypeTagNaN)(
  (p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)