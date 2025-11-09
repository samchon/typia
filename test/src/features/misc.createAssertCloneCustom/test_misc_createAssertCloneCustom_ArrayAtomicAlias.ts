import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_createAssertCloneCustom_ArrayAtomicAlias = (): void => _test_misc_assertClone(CustomGuardError)(
    "ArrayAtomicAlias",
)<ArrayAtomicAlias>(
    ArrayAtomicAlias
)(typia.misc.createAssertClone<ArrayAtomicAlias>((p) => new CustomGuardError(p)));
