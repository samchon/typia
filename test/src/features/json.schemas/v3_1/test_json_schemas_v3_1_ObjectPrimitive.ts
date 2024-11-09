import typia from "typia";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ObjectPrimitive = 
  _test_json_schemas({
    version: "3.1",
    name: "ObjectPrimitive", 
  })(typia.json.schemas<[ObjectPrimitive], "3.1">());