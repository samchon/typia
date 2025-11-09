import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_TypeTagTypeBigInt = (): void => _test_assertGuard(CustomGuardError)(
    "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(
    TypeTagTypeBigInt
)((input) => typia.assertGuard<TypeTagTypeBigInt>(input, (p) => new CustomGuardError(p)));
