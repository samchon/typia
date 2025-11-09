import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ArrayRecursiveUnionExplicitPointer = (): void => _test_assert(CustomGuardError)(
    "ArrayRecursiveUnionExplicitPointer",
)<ArrayRecursiveUnionExplicitPointer>(
    ArrayRecursiveUnionExplicitPointer
)((input) => typia.assert<ArrayRecursiveUnionExplicitPointer>(input, (p) => new CustomGuardError(p)));
