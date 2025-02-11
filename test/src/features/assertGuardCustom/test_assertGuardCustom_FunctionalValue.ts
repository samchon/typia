import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalValue } from "../../structures/FunctionalValue";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_FunctionalValue = _test_assertGuard(CustomGuardError)(
    "FunctionalValue",
)<FunctionalValue>(
    FunctionalValue
)((input) => typia.assertGuard<FunctionalValue>(input, (p) => new CustomGuardError(p)));
