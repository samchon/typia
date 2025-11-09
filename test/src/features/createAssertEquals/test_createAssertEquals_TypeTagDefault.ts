import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_TypeTagDefault = (): void => _test_assertEquals(TypeGuardError)(
    "TypeTagDefault",
)<TypeTagDefault>(
    TypeTagDefault
)(typia.createAssertEquals<TypeTagDefault>());
