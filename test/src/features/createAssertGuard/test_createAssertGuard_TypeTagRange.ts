import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_TypeTagRange = _test_assertGuard(TypeGuardError)(
    "TypeTagRange",
)<TypeTagRange>(
    TypeTagRange
)(typia.createAssertGuard<TypeTagRange>());
