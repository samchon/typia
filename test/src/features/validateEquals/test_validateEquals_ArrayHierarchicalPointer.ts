import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_validateEquals_ArrayHierarchicalPointer = (): void => _test_validateEquals(
    "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer
)((input) => typia.validateEquals<ArrayHierarchicalPointer>(input));
