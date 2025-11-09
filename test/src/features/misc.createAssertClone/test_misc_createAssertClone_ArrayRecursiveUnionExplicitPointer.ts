import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

import { TypeGuardError } from "typia";

export const test_misc_createAssertClone_ArrayRecursiveUnionExplicitPointer = (): void => _test_misc_assertClone(TypeGuardError)(
    "ArrayRecursiveUnionExplicitPointer",
)<ArrayRecursiveUnionExplicitPointer>(
    ArrayRecursiveUnionExplicitPointer
)(typia.misc.createAssertClone<ArrayRecursiveUnionExplicitPointer>());
