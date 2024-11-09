import typia from "typia";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ArrayRecursiveUnionImplicit = 
  _test_json_schemas({
    version: "3.1",
    name: "ArrayRecursiveUnionImplicit", 
  })(typia.json.schemas<[ArrayRecursiveUnionImplicit], "3.1">());