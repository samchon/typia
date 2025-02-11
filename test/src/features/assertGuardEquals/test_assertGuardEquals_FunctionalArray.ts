import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { FunctionalArray } from "../../structures/FunctionalArray";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_FunctionalArray = _test_assertGuardEquals(TypeGuardError)(
    "FunctionalArray",
)<FunctionalArray>(
    FunctionalArray
)((input) => typia.assertGuardEquals<FunctionalArray>(input));
