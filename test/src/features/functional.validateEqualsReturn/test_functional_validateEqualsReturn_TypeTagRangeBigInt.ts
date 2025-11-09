import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_validateEqualsReturn_TypeTagRangeBigInt = (): void => _test_functional_validateEqualsReturn(
  "TypeTagRangeBigInt"
)(TypeTagRangeBigInt)(
  (p: (input: TypeTagRangeBigInt) => TypeTagRangeBigInt) => typia.functional.validateEqualsReturn(p),
)