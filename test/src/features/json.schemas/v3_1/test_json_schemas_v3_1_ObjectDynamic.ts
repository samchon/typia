import typia from "typia";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ObjectDynamic = 
  _test_json_schemas({
    version: "3.1",
    name: "ObjectDynamic", 
  })(typia.json.schemas<[ObjectDynamic], "3.1">());