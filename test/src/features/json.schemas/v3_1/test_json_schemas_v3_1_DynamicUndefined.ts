import typia from "typia";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_DynamicUndefined = 
  _test_json_schemas({
    version: "3.1",
    name: "DynamicUndefined", 
  })(typia.json.schemas<[DynamicUndefined], "3.1">());