import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_FunctionalTuple = (): void => _test_assert(CustomGuardError)(
    "FunctionalTuple",
)<FunctionalTuple>(
    FunctionalTuple
)((input) => typia.assert<FunctionalTuple>(input, (p) => new CustomGuardError(p)));
