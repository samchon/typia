import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_createIs_ArrayHierarchical = _test_is(
    "ArrayHierarchical",
)<ArrayHierarchical>(
    ArrayHierarchical
)(typia.createIs<ArrayHierarchical>());
