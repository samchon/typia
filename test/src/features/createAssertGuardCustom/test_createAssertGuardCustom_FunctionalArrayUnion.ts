import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_FunctionalArrayUnion = (): void => _test_assertGuard(CustomGuardError)(
    "FunctionalArrayUnion",
)<FunctionalArrayUnion>(
    FunctionalArrayUnion
)(typia.createAssertGuard<FunctionalArrayUnion>((p) => new CustomGuardError(p)));
