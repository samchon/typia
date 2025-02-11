import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalArray } from "../../structures/FunctionalArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_FunctionalArray = _test_assertGuard(CustomGuardError)(
    "FunctionalArray",
)<FunctionalArray>(
    FunctionalArray
)(typia.createAssertGuard<FunctionalArray>((p) => new CustomGuardError(p)));
