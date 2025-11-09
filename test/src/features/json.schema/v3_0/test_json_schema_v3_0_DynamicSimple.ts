import typia from "typia";
import { DynamicSimple } from "../../../structures/DynamicSimple";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_DynamicSimple = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "DynamicSimple", 
  })(typia.json.schema<DynamicSimple, "3.0">());