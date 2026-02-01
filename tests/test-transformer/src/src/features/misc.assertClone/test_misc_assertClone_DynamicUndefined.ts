import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_DynamicUndefined = (): void => _test_misc_assertClone(TypeGuardError)(
    "DynamicUndefined",
)<DynamicUndefined>(
    DynamicUndefined
)((input) => typia.misc.assertClone<DynamicUndefined>(input));
