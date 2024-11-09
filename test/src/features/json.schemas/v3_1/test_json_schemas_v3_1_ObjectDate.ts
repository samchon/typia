import typia from "typia";
import { ObjectDate } from "../../../structures/ObjectDate";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ObjectDate = 
  _test_json_schemas({
    version: "3.1",
    name: "ObjectDate", 
  })(typia.json.schemas<[ObjectDate], "3.1">());