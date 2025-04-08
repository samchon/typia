import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ToJsonArray } from "../../../structures/ToJsonArray";

export const test_json_schema_v3_1_ToJsonArray = _test_json_schema({
  version: "3.1",
  name: "ToJsonArray",
})(typia.json.schema<ToJsonArray, "3.1">());
