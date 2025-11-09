import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_TypeTagBigInt = (): void => _test_assertEquals(TypeGuardError)(
    "TypeTagBigInt",
)<TypeTagBigInt>(
    TypeTagBigInt
)(typia.createAssertEquals<TypeTagBigInt>());
