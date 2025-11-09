import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_TypeTagRange = (): void => _test_assertGuardEquals(TypeGuardError)(
    "TypeTagRange",
)<TypeTagRange>(
    TypeTagRange
)(typia.createAssertGuardEquals<TypeTagRange>());
