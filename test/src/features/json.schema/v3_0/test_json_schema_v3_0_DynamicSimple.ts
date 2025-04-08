import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_json_schema_v3_0_DynamicSimple = _test_json_schema({
  version: "3.0",
  name: "DynamicSimple",
})(typia.json.schema<DynamicSimple, "3.0">());
