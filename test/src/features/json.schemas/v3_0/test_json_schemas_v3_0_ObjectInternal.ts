import typia from "typia";
import { ObjectInternal } from "../../../structures/ObjectInternal";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ObjectInternal = 
  _test_json_schemas({
    version: "3.0",
    name: "ObjectInternal", 
  })(typia.json.schemas<[ObjectInternal], "3.0">());