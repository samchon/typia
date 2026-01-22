import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_json_schema_v3_1_ToJsonTuple = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ToJsonTuple",
  })(typia.json.schema<ToJsonTuple, "3.1">());
