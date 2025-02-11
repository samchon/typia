import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagArray } from "../../structures/TypeTagArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_TypeTagArray = _test_assertGuardEquals(CustomGuardError)(
    "TypeTagArray",
)<TypeTagArray>(
    TypeTagArray
)(typia.createAssertGuardEquals<TypeTagArray>((p) => new CustomGuardError(p)));
