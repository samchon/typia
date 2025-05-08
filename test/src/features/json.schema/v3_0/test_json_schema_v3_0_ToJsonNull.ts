import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_json_schema_v3_0_ToJsonNull = _test_json_schema({
  version: "3.0",
  name: "ToJsonNull",
})(typia.json.schema<ToJsonNull, "3.0">());
