import typia from "typia";
import { ObjectAlias } from "../../../structures/ObjectAlias";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ObjectAlias = 
  _test_json_schemas({
    version: "3.0",
    name: "ObjectAlias", 
  })(typia.json.schemas<[ObjectAlias], "3.0">());