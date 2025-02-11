import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_TypeTagRangeBigInt = _test_functional_assertReturn(CustomGuardError)(
  "TypeTagRangeBigInt"
)(TypeTagRangeBigInt)(
  (p: (input: TypeTagRangeBigInt) => TypeTagRangeBigInt) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)