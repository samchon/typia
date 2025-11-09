import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_json_createIsParse_ArrayHierarchical = (): void => _test_json_isParse(
    "ArrayHierarchical",
)<ArrayHierarchical>(
    ArrayHierarchical
)(typia.json.createIsParse<ArrayHierarchical>());
