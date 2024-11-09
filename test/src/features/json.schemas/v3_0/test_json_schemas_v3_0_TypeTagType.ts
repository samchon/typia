import typia from "typia";
import { TypeTagType } from "../../../structures/TypeTagType";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_TypeTagType = 
  _test_json_schemas({
    version: "3.0",
    name: "TypeTagType", 
  })(typia.json.schemas<[TypeTagType], "3.0">());