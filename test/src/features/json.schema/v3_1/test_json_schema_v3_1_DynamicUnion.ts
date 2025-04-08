import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_json_schema_v3_1_DynamicUnion = _test_json_schema({
  version: "3.1",
  name: "DynamicUnion",
})(typia.json.schema<DynamicUnion, "3.1">());
