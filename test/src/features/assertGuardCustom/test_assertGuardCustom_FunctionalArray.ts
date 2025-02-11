import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalArray } from "../../structures/FunctionalArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_FunctionalArray = _test_assertGuard(CustomGuardError)(
    "FunctionalArray",
)<FunctionalArray>(
    FunctionalArray
)((input) => typia.assertGuard<FunctionalArray>(input, (p) => new CustomGuardError(p)));
