import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayAny } from "../../structures/ArrayAny";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_ArrayAny = (): void => _test_misc_assertClone(CustomGuardError)(
    "ArrayAny",
)<ArrayAny>(
    ArrayAny
)(typia.misc.createAssertClone<ArrayAny>((p) => new CustomGuardError(p)));
