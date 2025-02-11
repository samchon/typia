import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { TypeGuardError } from "typia";

export const test_createAssert_TypeTagFormat = _test_assert(TypeGuardError)(
    "TypeTagFormat",
)<TypeTagFormat>(
    TypeTagFormat
)(typia.createAssert<TypeTagFormat>());
