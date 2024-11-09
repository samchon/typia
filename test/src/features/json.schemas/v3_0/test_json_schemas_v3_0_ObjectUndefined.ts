import typia from "typia";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ObjectUndefined = 
  _test_json_schemas({
    version: "3.0",
    name: "ObjectUndefined", 
  })(typia.json.schemas<[ObjectUndefined], "3.0">());