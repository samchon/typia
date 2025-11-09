import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArraySimple } from "../../structures/ArraySimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_ArraySimple = (): void => _test_misc_assertClone(CustomGuardError)(
    "ArraySimple",
)<ArraySimple>(
    ArraySimple
)((input) => typia.misc.assertClone<ArraySimple>(input, (p) => new CustomGuardError(p)));
