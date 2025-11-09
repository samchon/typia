import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_functional_validateReturn_TypeTagTypeBigInt = (): void => _test_functional_validateReturn(
  "TypeTagTypeBigInt"
)(TypeTagTypeBigInt)(
  (p: (input: TypeTagTypeBigInt) => TypeTagTypeBigInt) => typia.functional.validateReturn(p),
)