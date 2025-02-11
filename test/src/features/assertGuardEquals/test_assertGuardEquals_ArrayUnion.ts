import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ArrayUnion } from "../../structures/ArrayUnion";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_ArrayUnion = _test_assertGuardEquals(TypeGuardError)(
    "ArrayUnion",
)<ArrayUnion>(
    ArrayUnion
)((input) => typia.assertGuardEquals<ArrayUnion>(input));
