import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_json_schema_v3_0_DynamicTree = _test_json_schema({
  version: "3.0",
  name: "DynamicTree",
})(typia.json.schema<DynamicTree, "3.0">());
