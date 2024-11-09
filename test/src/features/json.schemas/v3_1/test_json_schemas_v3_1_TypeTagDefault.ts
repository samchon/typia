import typia from "typia";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_TypeTagDefault = 
  _test_json_schemas({
    version: "3.1",
    name: "TypeTagDefault", 
  })(typia.json.schemas<[TypeTagDefault], "3.1">());