import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_misc_assertCloneCustom_ArrayRecursiveUnionExplicitPointer = (): void => _test_misc_assertClone(CustomGuardError)(
    "ArrayRecursiveUnionExplicitPointer",
)<ArrayRecursiveUnionExplicitPointer>(
    ArrayRecursiveUnionExplicitPointer
)((input) => typia.misc.assertClone<ArrayRecursiveUnionExplicitPointer>(input, (p) => new CustomGuardError(p)));
