import typia from "../../../src";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_misc_createIsPrune_ArrayRecursiveUnionExplicitPointer = _test_misc_isPrune(
    "ArrayRecursiveUnionExplicitPointer",
)<ArrayRecursiveUnionExplicitPointer>(
    ArrayRecursiveUnionExplicitPointer
)(typia.misc.createIsPrune<ArrayRecursiveUnionExplicitPointer>());
