import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_DynamicUndefined = (): void => _test_misc_assertClone(CustomGuardError)(
    "DynamicUndefined",
)<DynamicUndefined>(
    DynamicUndefined
)(typia.misc.createAssertClone<DynamicUndefined>((p) => new CustomGuardError(p)));
