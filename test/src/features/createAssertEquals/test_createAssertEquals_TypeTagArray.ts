import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_TypeTagArray = _test_assertEquals(TypeGuardError)(
    "TypeTagArray",
)<TypeTagArray>(
    TypeTagArray
)(typia.createAssertEquals<TypeTagArray>());
