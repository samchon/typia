import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicNever } from "../../structures/DynamicNever";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_DynamicNever = (): void => _test_misc_assertClone(CustomGuardError)(
    "DynamicNever",
)<DynamicNever>(
    DynamicNever
)(typia.misc.createAssertClone<DynamicNever>((p) => new CustomGuardError(p)));
