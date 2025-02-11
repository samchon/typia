import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalValue } from "../../structures/FunctionalValue";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_FunctionalValue = _test_assertGuardEquals(CustomGuardError)(
    "FunctionalValue",
)<FunctionalValue>(
    FunctionalValue
)((input) => typia.assertGuardEquals<FunctionalValue>(input, (p) => new CustomGuardError(p)));
