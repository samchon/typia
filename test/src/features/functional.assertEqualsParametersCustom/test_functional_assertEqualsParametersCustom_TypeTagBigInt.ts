import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_TypeTagBigInt = (): void => _test_functional_assertEqualsParameters(CustomGuardError)(
  "TypeTagBigInt"
)(TypeTagBigInt)(
  (p: (input: TypeTagBigInt) => TypeTagBigInt) => typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)