import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { TypeGuardError } from "typia";

export const test_createAssert_TypeTagNaN = (): void => _test_assert(TypeGuardError)(
    "TypeTagNaN",
)<TypeTagNaN>(
    TypeTagNaN
)(typia.createAssert<TypeTagNaN>());
