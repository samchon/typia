import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_TypeTagBigInt = (): Promise<void> => _test_functional_assertEqualsParametersAsync(CustomGuardError)(
  "TypeTagBigInt"
)(TypeTagBigInt)(
  (p: (input: TypeTagBigInt) => Promise<TypeTagBigInt>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)