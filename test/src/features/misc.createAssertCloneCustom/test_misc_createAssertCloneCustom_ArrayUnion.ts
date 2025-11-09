import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayUnion } from "../../structures/ArrayUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_ArrayUnion = (): void => _test_misc_assertClone(CustomGuardError)(
    "ArrayUnion",
)<ArrayUnion>(
    ArrayUnion
)(typia.misc.createAssertClone<ArrayUnion>((p) => new CustomGuardError(p)));
