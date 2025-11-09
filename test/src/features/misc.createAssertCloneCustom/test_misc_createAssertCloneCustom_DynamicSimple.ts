import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicSimple } from "../../structures/DynamicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_DynamicSimple = (): void => _test_misc_assertClone(CustomGuardError)(
    "DynamicSimple",
)<DynamicSimple>(
    DynamicSimple
)(typia.misc.createAssertClone<DynamicSimple>((p) => new CustomGuardError(p)));
