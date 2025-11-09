import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ArrayRecursiveUnionExplicitPointer = (): void => _test_assertGuard(CustomGuardError)(
    "ArrayRecursiveUnionExplicitPointer",
)<ArrayRecursiveUnionExplicitPointer>(
    ArrayRecursiveUnionExplicitPointer
)((input) => typia.assertGuard<ArrayRecursiveUnionExplicitPointer>(input, (p) => new CustomGuardError(p)));
