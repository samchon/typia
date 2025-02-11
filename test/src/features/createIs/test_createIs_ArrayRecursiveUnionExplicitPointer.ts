import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_createIs_ArrayRecursiveUnionExplicitPointer = _test_is(
    "ArrayRecursiveUnionExplicitPointer",
)<ArrayRecursiveUnionExplicitPointer>(
    ArrayRecursiveUnionExplicitPointer
)(typia.createIs<ArrayRecursiveUnionExplicitPointer>());
