import typia from "typia";
import { DynamicTree } from "../../../structures/DynamicTree";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_DynamicTree = 
  _test_json_schemas({
    version: "3.1",
    name: "DynamicTree", 
  })(typia.json.schemas<[DynamicTree], "3.1">());