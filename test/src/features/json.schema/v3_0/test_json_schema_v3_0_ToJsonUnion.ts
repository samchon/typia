import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_json_schema_v3_0_ToJsonUnion = _test_json_schema({
  version: "3.0",
  name: "ToJsonUnion",
})(typia.json.schema<ToJsonUnion, "3.0">());
