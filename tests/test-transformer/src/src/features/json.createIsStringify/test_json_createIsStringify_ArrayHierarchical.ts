import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_json_createIsStringify_ArrayHierarchical = (): void => _test_json_isStringify(
    "ArrayHierarchical",
)<ArrayHierarchical>(
    ArrayHierarchical
)(typia.json.createIsStringify<ArrayHierarchical>());
