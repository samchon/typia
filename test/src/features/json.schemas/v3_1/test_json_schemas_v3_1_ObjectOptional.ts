import typia from "typia";
import { ObjectOptional } from "../../../structures/ObjectOptional";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ObjectOptional = 
  _test_json_schemas({
    version: "3.1",
    name: "ObjectOptional", 
  })(typia.json.schemas<[ObjectOptional], "3.1">());