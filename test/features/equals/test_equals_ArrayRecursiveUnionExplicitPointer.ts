import typia from "../../../src";

import { _test_equals } from "../../internal/_test_equals";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_equals_ArrayRecursiveUnionExplicitPointer = _test_equals(
    "ArrayRecursiveUnionExplicitPointer",
)<ArrayRecursiveUnionExplicitPointer>(
    ArrayRecursiveUnionExplicitPointer
)((input) => typia.equals<ArrayRecursiveUnionExplicitPointer>(input));
