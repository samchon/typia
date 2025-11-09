import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_TypeTagTypeBigInt = (): void => _test_functional_assertReturn(CustomGuardError)(
  "TypeTagTypeBigInt"
)(TypeTagTypeBigInt)(
  (p: (input: TypeTagTypeBigInt) => TypeTagTypeBigInt) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)