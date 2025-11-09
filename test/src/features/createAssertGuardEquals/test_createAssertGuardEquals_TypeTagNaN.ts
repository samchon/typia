import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagNaN } from "../../structures/TypeTagNaN";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_TypeTagNaN = (): void => _test_assertGuardEquals(TypeGuardError)(
    "TypeTagNaN",
)<TypeTagNaN>(
    TypeTagNaN
)(typia.createAssertGuardEquals<TypeTagNaN>());
