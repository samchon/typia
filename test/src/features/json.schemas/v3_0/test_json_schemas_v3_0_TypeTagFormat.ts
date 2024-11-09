import typia from "typia";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_TypeTagFormat = 
  _test_json_schemas({
    version: "3.0",
    name: "TypeTagFormat", 
  })(typia.json.schemas<[TypeTagFormat], "3.0">());