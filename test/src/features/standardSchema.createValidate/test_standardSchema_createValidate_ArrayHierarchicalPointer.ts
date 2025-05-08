import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_standardSchema_createValidate_ArrayHierarchicalPointer = _test_standardSchema_validate(
    "ArrayHierarchicalPointer",
)<ArrayHierarchicalPointer>(
    ArrayHierarchicalPointer
)(typia.createValidate<ArrayHierarchicalPointer>());
