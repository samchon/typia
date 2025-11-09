import typia from "typia";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_ToJsonUnion = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ToJsonUnion", 
  })(typia.json.schema<ToJsonUnion, "3.0">());