import typia from "typia";

import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ArrayHierarchical = _test_validate(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    typia.createValidate<ArrayHierarchical>(),
    ArrayHierarchical.SPOILERS,
);
