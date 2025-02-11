import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_FunctionalTuple = _test_assertGuard(TypeGuardError)(
    "FunctionalTuple",
)<FunctionalTuple>(
    FunctionalTuple
)(typia.createAssertGuard<FunctionalTuple>());
