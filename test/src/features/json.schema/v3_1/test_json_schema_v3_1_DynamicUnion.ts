import typia from "typia";
import { DynamicUnion } from "../../../structures/DynamicUnion";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_DynamicUnion = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "DynamicUnion", 
  })(typia.json.schema<DynamicUnion, "3.1">());