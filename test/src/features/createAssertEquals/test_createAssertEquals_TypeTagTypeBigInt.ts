import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_TypeTagTypeBigInt = (): void => _test_assertEquals(TypeGuardError)(
    "TypeTagTypeBigInt",
)<TypeTagTypeBigInt>(
    TypeTagTypeBigInt
)(typia.createAssertEquals<TypeTagTypeBigInt>());
