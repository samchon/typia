import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_FunctionalObjectUnion = (): void => _test_assertGuard(CustomGuardError)(
    "FunctionalObjectUnion",
)<FunctionalObjectUnion>(
    FunctionalObjectUnion
)((input) => typia.assertGuard<FunctionalObjectUnion>(input, (p) => new CustomGuardError(p)));
