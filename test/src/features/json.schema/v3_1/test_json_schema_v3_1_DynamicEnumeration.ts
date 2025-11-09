import typia from "typia";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_DynamicEnumeration = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "DynamicEnumeration", 
  })(typia.json.schema<DynamicEnumeration, "3.1">());