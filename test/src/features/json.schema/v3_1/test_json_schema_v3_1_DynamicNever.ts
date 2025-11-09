import typia from "typia";
import { DynamicNever } from "../../../structures/DynamicNever";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_DynamicNever = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "DynamicNever", 
  })(typia.json.schema<DynamicNever, "3.1">());