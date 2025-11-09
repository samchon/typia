import typia from "typia";
import { DynamicConstant } from "../../../structures/DynamicConstant";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_DynamicConstant = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "DynamicConstant", 
  })(typia.json.schema<DynamicConstant, "3.0">());