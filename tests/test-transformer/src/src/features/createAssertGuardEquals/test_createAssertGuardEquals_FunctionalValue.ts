import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalValue } from "../../structures/FunctionalValue";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_FunctionalValue = (): void => _test_assertGuardEquals(TypeGuardError)(
    "FunctionalValue",
)<FunctionalValue>(
    FunctionalValue
)(typia.createAssertGuardEquals<FunctionalValue>());
