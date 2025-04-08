import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_json_schema_v3_0_DynamicNever = _test_json_schema({
  version: "3.0",
  name: "DynamicNever",
})(typia.json.schema<DynamicNever, "3.0">());
