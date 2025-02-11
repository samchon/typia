import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalValue } from "../../structures/FunctionalValue";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardEqualsCustom_FunctionalValue = _test_assertGuardEquals(CustomGuardError)(
    "FunctionalValue",
)<FunctionalValue>(
    FunctionalValue
)(typia.createAssertGuardEquals<FunctionalValue>((p) => new CustomGuardError(p)));
