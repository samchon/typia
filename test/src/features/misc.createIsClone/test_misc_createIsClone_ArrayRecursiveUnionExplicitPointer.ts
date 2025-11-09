import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_misc_createIsClone_ArrayRecursiveUnionExplicitPointer = (): void => _test_misc_isClone(
    "ArrayRecursiveUnionExplicitPointer",
)<ArrayRecursiveUnionExplicitPointer>(
    ArrayRecursiveUnionExplicitPointer
)(typia.misc.createIsClone<ArrayRecursiveUnionExplicitPointer>());
