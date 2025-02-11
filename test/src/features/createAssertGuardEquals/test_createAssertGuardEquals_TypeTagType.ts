import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagType } from "../../structures/TypeTagType";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_TypeTagType = _test_assertGuardEquals(TypeGuardError)(
    "TypeTagType",
)<TypeTagType>(
    TypeTagType
)(typia.createAssertGuardEquals<TypeTagType>());
