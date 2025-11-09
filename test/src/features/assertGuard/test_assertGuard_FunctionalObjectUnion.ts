import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

import { TypeGuardError } from "typia";

export const test_assertGuard_FunctionalObjectUnion = (): void => _test_assertGuard(TypeGuardError)(
    "FunctionalObjectUnion",
)<FunctionalObjectUnion>(
    FunctionalObjectUnion
)((input) => typia.assertGuard<FunctionalObjectUnion>(input));
