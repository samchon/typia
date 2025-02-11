import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_TypeTagRange = _test_assertGuardEquals(CustomGuardError)(
    "TypeTagRange",
)<TypeTagRange>(
    TypeTagRange
)(typia.createAssertGuardEquals<TypeTagRange>((p) => new CustomGuardError(p)));
