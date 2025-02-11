import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagType } from "../../structures/TypeTagType";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_TypeTagType = _test_assertEquals(TypeGuardError)(
    "TypeTagType",
)<TypeTagType>(
    TypeTagType
)(typia.createAssertEquals<TypeTagType>());
