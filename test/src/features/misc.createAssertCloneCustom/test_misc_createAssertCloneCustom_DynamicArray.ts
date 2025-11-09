import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicArray } from "../../structures/DynamicArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_DynamicArray = (): void => _test_misc_assertClone(CustomGuardError)(
    "DynamicArray",
)<DynamicArray>(
    DynamicArray
)(typia.misc.createAssertClone<DynamicArray>((p) => new CustomGuardError(p)));
