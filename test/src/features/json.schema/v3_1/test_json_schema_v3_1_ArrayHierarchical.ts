import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_json_schema_v3_1_ArrayHierarchical = _test_json_schema({
  version: "3.1",
  name: "ArrayHierarchical",
})(typia.json.schema<ArrayHierarchical, "3.1">());
