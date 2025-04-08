import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_json_schema_v3_1_DynamicConstant = _test_json_schema({
  version: "3.1",
  name: "DynamicConstant",
})(typia.json.schema<DynamicConstant, "3.1">());
