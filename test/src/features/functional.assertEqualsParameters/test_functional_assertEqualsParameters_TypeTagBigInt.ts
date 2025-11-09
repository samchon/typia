import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_TypeTagBigInt = (): void => _test_functional_assertEqualsParameters(TypeGuardError)(
  "TypeTagBigInt"
)(TypeTagBigInt)(
  (p: (input: TypeTagBigInt) => TypeTagBigInt) => typia.functional.assertEqualsParameters(p),
)