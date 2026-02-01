import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_createEquals_ArrayHierarchicalPointer = (): void => _test_equals(
    "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer
)(typia.createEquals<ArrayHierarchicalPointer>());
