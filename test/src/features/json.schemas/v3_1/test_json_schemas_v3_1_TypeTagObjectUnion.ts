import typia from "typia";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_TypeTagObjectUnion = 
  _test_json_schemas({
    version: "3.1",
    name: "TypeTagObjectUnion", 
  })(typia.json.schemas<[TypeTagObjectUnion], "3.1">());