import typia from "typia";
import { ObjectRequired } from "../../../structures/ObjectRequired";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ObjectRequired = 
  _test_json_schemas({
    version: "3.0",
    name: "ObjectRequired", 
  })(typia.json.schemas<[ObjectRequired], "3.0">());