import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayAny } from "../../structures/ArrayAny";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_ArrayAny = (): void => _test_misc_assertClone(CustomGuardError)(
    "ArrayAny",
)<ArrayAny>(
    ArrayAny
)((input) => typia.misc.assertClone<ArrayAny>(input, (p) => new CustomGuardError(p)));
