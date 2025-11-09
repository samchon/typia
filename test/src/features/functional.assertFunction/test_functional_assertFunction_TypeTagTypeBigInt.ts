import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_TypeTagTypeBigInt = (): void => _test_functional_assertFunction(TypeGuardError)(
  "TypeTagTypeBigInt"
)(TypeTagTypeBigInt)(
  (p: (input: TypeTagTypeBigInt) => TypeTagTypeBigInt) => typia.functional.assertFunction(p),
)