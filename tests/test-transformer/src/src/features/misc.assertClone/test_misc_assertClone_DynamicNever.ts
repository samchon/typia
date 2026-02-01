import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicNever } from "../../structures/DynamicNever";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_DynamicNever = (): void => _test_misc_assertClone(TypeGuardError)(
    "DynamicNever",
)<DynamicNever>(
    DynamicNever
)((input) => typia.misc.assertClone<DynamicNever>(input));
