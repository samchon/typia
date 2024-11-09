import typia from "typia";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_TypeTagFormat = 
  _test_json_schemas({
    version: "3.1",
    name: "TypeTagFormat", 
  })(typia.json.schemas<[TypeTagFormat], "3.1">());