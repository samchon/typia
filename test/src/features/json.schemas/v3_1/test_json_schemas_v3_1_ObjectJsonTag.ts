import typia from "typia";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ObjectJsonTag = 
  _test_json_schemas({
    version: "3.1",
    name: "ObjectJsonTag", 
  })(typia.json.schemas<[ObjectJsonTag], "3.1">());