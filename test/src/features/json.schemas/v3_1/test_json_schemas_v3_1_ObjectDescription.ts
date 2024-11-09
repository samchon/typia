import typia from "typia";
import { ObjectDescription } from "../../../structures/ObjectDescription";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ObjectDescription = 
  _test_json_schemas({
    version: "3.1",
    name: "ObjectDescription", 
  })(typia.json.schemas<[ObjectDescription], "3.1">());