import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_TypeTagTypeBigInt = (): void => _test_assertEquals(CustomGuardError)(
    "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(
    TypeTagTypeBigInt
)((input) => typia.assertEquals<TypeTagTypeBigInt>(input, (p) => new CustomGuardError(p)));
