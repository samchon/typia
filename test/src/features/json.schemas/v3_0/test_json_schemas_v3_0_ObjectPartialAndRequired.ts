import typia from "typia";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ObjectPartialAndRequired = 
  _test_json_schemas({
    version: "3.0",
    name: "ObjectPartialAndRequired", 
  })(typia.json.schemas<[ObjectPartialAndRequired], "3.0">());