import typia from "typia";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_ToJsonTuple = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ToJsonTuple", 
  })(typia.json.schema<ToJsonTuple, "3.0">());