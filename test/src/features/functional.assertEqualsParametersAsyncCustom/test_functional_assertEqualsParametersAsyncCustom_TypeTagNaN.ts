import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_TypeTagNaN = (): Promise<void> => _test_functional_assertEqualsParametersAsync(CustomGuardError)(
  "TypeTagNaN"
)(TypeTagNaN)(
  (p: (input: TypeTagNaN) => Promise<TypeTagNaN>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)