import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_FunctionalPropertyUnion = _test_assertGuardEquals(TypeGuardError)(
    "FunctionalPropertyUnion",
)<FunctionalPropertyUnion>(
    FunctionalPropertyUnion
)((input) => typia.assertGuardEquals<FunctionalPropertyUnion>(input));
