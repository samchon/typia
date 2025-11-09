import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { TypeGuardError } from "typia";

export const test_createAssert_TypeTagInfinite = (): void => _test_assert(TypeGuardError)(
    "TypeTagInfinite",
)<TypeTagInfinite>(
    TypeTagInfinite
)(typia.createAssert<TypeTagInfinite>());
