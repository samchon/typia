import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_FunctionalObjectUnion = (): void => _test_assertGuardEquals(TypeGuardError)(
    "FunctionalObjectUnion",
)<FunctionalObjectUnion>(
    FunctionalObjectUnion
)((input) => typia.assertGuardEquals<FunctionalObjectUnion>(input));
