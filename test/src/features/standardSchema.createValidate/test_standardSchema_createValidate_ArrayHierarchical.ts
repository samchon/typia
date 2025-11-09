import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_standardSchema_createValidate_ArrayHierarchical = (): void => _test_standardSchema_validate(
    "ArrayHierarchical",
)<ArrayHierarchical>(
    ArrayHierarchical
)(typia.createValidate<ArrayHierarchical>());
