import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayAny } from "../../structures/ArrayAny";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_ArrayAny = (): void => _test_misc_assertClone(TypeGuardError)(
    "ArrayAny",
)<ArrayAny>(
    ArrayAny
)((input) => typia.misc.assertClone<ArrayAny>(input));
