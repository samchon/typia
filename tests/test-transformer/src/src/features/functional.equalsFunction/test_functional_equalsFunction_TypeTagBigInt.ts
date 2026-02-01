import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_equalsFunction_TypeTagBigInt = (): void => _test_functional_equalsFunction(
  "TypeTagBigInt"
)(TypeTagBigInt)(
  (p: (input: TypeTagBigInt) => TypeTagBigInt) => typia.functional.equalsFunction(p),
)