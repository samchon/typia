import typia from "typia";

import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ArrayHierarchical = _test_validateEquals(
    "ArrayHierarchical",
    ArrayHierarchical.generate,
    typia.createValidateEquals<ArrayHierarchical>(),
);
