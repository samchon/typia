import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TypeTagLength } from "../../structures/TypeTagLength";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_TypeTagLength = (): void => _test_assertGuardEquals(CustomGuardError)(
    "TypeTagLength",
)<TypeTagLength>(
    TypeTagLength
)((input) => typia.assertGuardEquals<TypeTagLength>(input, (p) => new CustomGuardError(p)));
