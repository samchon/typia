import typia from "typia";
import { DynamicTree } from "../../../structures/DynamicTree";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_DynamicTree = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "DynamicTree", 
  })(typia.json.schema<DynamicTree, "3.1">());