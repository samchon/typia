import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_TypeTagBigInt = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "TypeTagBigInt"
)(TypeTagBigInt)(
  (p: (input: TypeTagBigInt) => Promise<TypeTagBigInt>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)