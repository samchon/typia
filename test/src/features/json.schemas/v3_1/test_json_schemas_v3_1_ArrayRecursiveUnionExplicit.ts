import typia from "typia";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ArrayRecursiveUnionExplicit = 
  _test_json_schemas({
    version: "3.1",
    name: "ArrayRecursiveUnionExplicit", 
  })(typia.json.schemas<[ArrayRecursiveUnionExplicit], "3.1">());