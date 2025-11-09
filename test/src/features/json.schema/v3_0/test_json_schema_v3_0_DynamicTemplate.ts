import typia from "typia";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_DynamicTemplate = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "DynamicTemplate", 
  })(typia.json.schema<DynamicTemplate, "3.0">());