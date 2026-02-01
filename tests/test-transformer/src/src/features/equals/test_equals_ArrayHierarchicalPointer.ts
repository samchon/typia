import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_equals_ArrayHierarchicalPointer = (): void => _test_equals(
    "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer
)((input) => typia.equals<ArrayHierarchicalPointer>(input));
