import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagRange } from "../../structures/TypeTagRange";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_TypeTagRange = (): void => _test_assertGuardEquals(CustomGuardError)(
    "TypeTagRange",
)<TypeTagRange>(
    TypeTagRange
)((input) => typia.assertGuardEquals<TypeTagRange>(input, (p) => new CustomGuardError(p)));
