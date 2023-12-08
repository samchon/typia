import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_json_createStringify_ArrayHierarchical = _test_json_stringify(
  "ArrayHierarchical",
)<ArrayHierarchical>(ArrayHierarchical)(
  typia.json.createStringify<ArrayHierarchical>(),
);
