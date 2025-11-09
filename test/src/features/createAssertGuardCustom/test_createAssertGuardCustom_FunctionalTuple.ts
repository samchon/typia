import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_FunctionalTuple = (): void => _test_assertGuard(CustomGuardError)(
    "FunctionalTuple",
)<FunctionalTuple>(
    FunctionalTuple
)(typia.createAssertGuard<FunctionalTuple>((p) => new CustomGuardError(p)));
