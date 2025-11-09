import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_TypeTagRangeBigInt = (): void => _test_functional_assertParameters(TypeGuardError)(
  "TypeTagRangeBigInt"
)(TypeTagRangeBigInt)(
  (p: (input: TypeTagRangeBigInt) => TypeTagRangeBigInt) => typia.functional.assertParameters(p),
)