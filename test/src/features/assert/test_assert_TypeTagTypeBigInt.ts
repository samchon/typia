import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

import { TypeGuardError } from "typia";

export const test_assert_TypeTagTypeBigInt = (): void => _test_assert(TypeGuardError)(
    "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(
    TypeTagTypeBigInt
)((input) => typia.assert<TypeTagTypeBigInt>(input));
