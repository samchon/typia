import typia from "typia";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_ToJsonDouble = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ToJsonDouble", 
  })(typia.json.schema<ToJsonDouble, "3.0">());