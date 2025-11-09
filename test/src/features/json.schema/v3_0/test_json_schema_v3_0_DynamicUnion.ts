import typia from "typia";
import { DynamicUnion } from "../../../structures/DynamicUnion";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_DynamicUnion = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "DynamicUnion", 
  })(typia.json.schema<DynamicUnion, "3.0">());