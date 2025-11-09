import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_TypeTagRangeBigInt = (): void => _test_assertEquals(TypeGuardError)(
    "TypeTagRangeBigInt",
)<TypeTagRangeBigInt>(
    TypeTagRangeBigInt
)(typia.createAssertEquals<TypeTagRangeBigInt>());
