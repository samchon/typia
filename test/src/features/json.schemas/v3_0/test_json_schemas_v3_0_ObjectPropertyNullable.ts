import typia from "typia";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ObjectPropertyNullable = 
  _test_json_schemas({
    version: "3.0",
    name: "ObjectPropertyNullable", 
  })(typia.json.schemas<[ObjectPropertyNullable], "3.0">());