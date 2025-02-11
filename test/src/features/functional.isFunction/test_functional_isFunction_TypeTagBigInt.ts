import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_isFunction_TypeTagBigInt = _test_functional_isFunction(
  "TypeTagBigInt"
)(TypeTagBigInt)(
  (p: (input: TypeTagBigInt) => TypeTagBigInt) => typia.functional.isFunction(p),
)