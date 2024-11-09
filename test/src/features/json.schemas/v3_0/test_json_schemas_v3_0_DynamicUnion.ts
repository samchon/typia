import typia from "typia";
import { DynamicUnion } from "../../../structures/DynamicUnion";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_DynamicUnion = 
  _test_json_schemas({
    version: "3.0",
    name: "DynamicUnion", 
  })(typia.json.schemas<[DynamicUnion], "3.0">());