import typia from "typia";
import { ObjectPartial } from "../../../structures/ObjectPartial";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ObjectPartial = 
  _test_json_schemas({
    version: "3.1",
    name: "ObjectPartial", 
  })(typia.json.schemas<[ObjectPartial], "3.1">());