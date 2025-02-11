import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { TypeGuardError } from "typia";

export const test_createAssert_TypeTagRange = _test_assert(TypeGuardError)(
    "TypeTagRange",
)<TypeTagRange>(
    TypeTagRange
)(typia.createAssert<TypeTagRange>());
