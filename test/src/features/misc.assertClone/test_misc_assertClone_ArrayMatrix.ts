import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

import { TypeGuardError } from "typia";

export const test_misc_assertClone_ArrayMatrix = (): void => _test_misc_assertClone(TypeGuardError)(
    "ArrayMatrix",
)<ArrayMatrix>(
    ArrayMatrix
)((input) => typia.misc.assertClone<ArrayMatrix>(input));
