import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalArray } from "../../structures/FunctionalArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_FunctionalArray = (): void => _test_assertGuardEquals(CustomGuardError)(
    "FunctionalArray",
)<FunctionalArray>(
    FunctionalArray
)((input) => typia.assertGuardEquals<FunctionalArray>(input, (p) => new CustomGuardError(p)));
