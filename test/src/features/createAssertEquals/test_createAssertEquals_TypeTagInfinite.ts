import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_TypeTagInfinite = (): void => _test_assertEquals(TypeGuardError)(
    "TypeTagInfinite",
)<TypeTagInfinite>(
    TypeTagInfinite
)(typia.createAssertEquals<TypeTagInfinite>());
