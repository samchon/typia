import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

import { TypeGuardError } from "typia";

export const test_assertGuard_FunctionalValueUnion = _test_assertGuard(TypeGuardError)(
    "FunctionalValueUnion",
)<FunctionalValueUnion>(
    FunctionalValueUnion
)((input) => typia.assertGuard<FunctionalValueUnion>(input));
