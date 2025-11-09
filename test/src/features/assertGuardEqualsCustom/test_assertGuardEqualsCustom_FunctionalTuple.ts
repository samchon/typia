import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardEqualsCustom_FunctionalTuple = (): void => _test_assertGuardEquals(CustomGuardError)(
    "FunctionalTuple",
)<FunctionalTuple>(
    FunctionalTuple
)((input) => typia.assertGuardEquals<FunctionalTuple>(input, (p) => new CustomGuardError(p)));
