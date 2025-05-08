import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_json_schema_v3_1_DynamicTemplate = _test_json_schema({
  version: "3.1",
  name: "DynamicTemplate",
})(typia.json.schema<DynamicTemplate, "3.1">());
