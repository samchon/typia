import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalValue } from "../../structures/FunctionalValue";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_FunctionalValue = _test_assertGuard(TypeGuardError)(
    "FunctionalValue",
)<FunctionalValue>(
    FunctionalValue
)(typia.createAssertGuard<FunctionalValue>());
