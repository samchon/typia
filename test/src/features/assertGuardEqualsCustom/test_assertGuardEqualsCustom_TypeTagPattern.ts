import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_TypeTagPattern = (): void => _test_assertGuardEquals(CustomGuardError)(
    "TypeTagPattern",
)<TypeTagPattern>(
    TypeTagPattern
)((input) => typia.assertGuardEquals<TypeTagPattern>(input, (p) => new CustomGuardError(p)));
