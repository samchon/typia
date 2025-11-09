import typia from "typia";
import { ToJsonNull } from "../../../structures/ToJsonNull";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_ToJsonNull = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ToJsonNull", 
  })(typia.json.schema<ToJsonNull, "3.0">());