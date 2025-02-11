import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_TypeTagBigInt = _test_functional_assertEqualsParametersAsync(TypeGuardError)(
  "TypeTagBigInt"
)(TypeTagBigInt)(
  (p: (input: TypeTagBigInt) => Promise<TypeTagBigInt>) =>
    typia.functional.assertEqualsParameters(p),
)