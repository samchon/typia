import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_TypeTagFormat = (): void => _test_assertEquals(TypeGuardError)(
    "TypeTagFormat",
)<TypeTagFormat>(
    TypeTagFormat
)(typia.createAssertEquals<TypeTagFormat>());
