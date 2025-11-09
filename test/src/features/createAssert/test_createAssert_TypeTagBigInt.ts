import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

import { TypeGuardError } from "typia";

export const test_createAssert_TypeTagBigInt = (): void => _test_assert(TypeGuardError)(
    "TypeTagBigInt",
)<TypeTagBigInt>(
    TypeTagBigInt
)(typia.createAssert<TypeTagBigInt>());
