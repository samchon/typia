import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_json_schemas_v3_1_ArrayHierarchical = _test_json_schemas({
  version: "3.1",
  name: "ArrayHierarchical",
})(typia.json.schemas<[ArrayHierarchical], "3.1">());
