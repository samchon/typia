import typia from "typia";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ToJsonDouble = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ToJsonDouble", 
  })(typia.json.schema<ToJsonDouble, "3.1">());