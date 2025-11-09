import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_TypeTagRangeBigInt = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "TypeTagRangeBigInt"
)(TypeTagRangeBigInt)(
  (p: (input: TypeTagRangeBigInt) => TypeTagRangeBigInt) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)