import typia from "typia";
import { DynamicConstant } from "../../../structures/DynamicConstant";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_DynamicConstant = 
  _test_json_schemas({
    version: "3.0",
    name: "DynamicConstant", 
  })(typia.json.schemas<[DynamicConstant], "3.0">());