import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_functional_validateEqualsFunction_TypeTagBigInt = (): void => _test_functional_validateEqualsFunction(
  "TypeTagBigInt"
)(TypeTagBigInt)(
  (p: (input: TypeTagBigInt) => TypeTagBigInt) => typia.functional.validateEqualsFunction(p),
)