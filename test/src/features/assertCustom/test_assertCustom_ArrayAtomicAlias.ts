import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ArrayAtomicAlias = (): void => _test_assert(CustomGuardError)(
    "ArrayAtomicAlias",
)<ArrayAtomicAlias>(
    ArrayAtomicAlias
)((input) => typia.assert<ArrayAtomicAlias>(input, (p) => new CustomGuardError(p)));
