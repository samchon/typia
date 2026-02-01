import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_createValidate_ArrayHierarchical = (): void => _test_validate(
    "ArrayHierarchical",
)<ArrayHierarchical>(
    ArrayHierarchical
)(typia.createValidate<ArrayHierarchical>());
