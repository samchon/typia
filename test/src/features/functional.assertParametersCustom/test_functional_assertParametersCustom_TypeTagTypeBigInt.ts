import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_TypeTagTypeBigInt = (): void => _test_functional_assertParameters(CustomGuardError)(
  "TypeTagTypeBigInt"
)(TypeTagTypeBigInt)(
  (p: (input: TypeTagTypeBigInt) => TypeTagTypeBigInt) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)