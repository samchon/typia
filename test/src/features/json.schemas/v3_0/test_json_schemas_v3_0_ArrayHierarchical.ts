import typia from "typia";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ArrayHierarchical = 
  _test_json_schemas({
    version: "3.0",
    name: "ArrayHierarchical", 
  })(typia.json.schemas<[ArrayHierarchical], "3.0">());