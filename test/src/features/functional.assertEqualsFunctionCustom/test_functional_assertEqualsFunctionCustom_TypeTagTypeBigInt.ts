import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_TypeTagTypeBigInt = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "TypeTagTypeBigInt"
)(TypeTagTypeBigInt)(
  (p: (input: TypeTagTypeBigInt) => TypeTagTypeBigInt) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)