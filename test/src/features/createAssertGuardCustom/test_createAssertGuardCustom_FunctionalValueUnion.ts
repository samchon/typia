import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_FunctionalValueUnion = (): void => _test_assertGuard(CustomGuardError)(
    "FunctionalValueUnion",
)<FunctionalValueUnion>(
    FunctionalValueUnion
)(typia.createAssertGuard<FunctionalValueUnion>((p) => new CustomGuardError(p)));
