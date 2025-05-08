import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_json_schema_v3_0_ToJsonTuple = _test_json_schema({
  version: "3.0",
  name: "ToJsonTuple",
})(typia.json.schema<ToJsonTuple, "3.0">());
