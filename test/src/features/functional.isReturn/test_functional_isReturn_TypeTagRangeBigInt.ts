import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_functional_isReturn_TypeTagRangeBigInt = (): void => _test_functional_isReturn(
  "TypeTagRangeBigInt"
)(TypeTagRangeBigInt)(
  (p: (input: TypeTagRangeBigInt) => TypeTagRangeBigInt) => typia.functional.isReturn(p),
)