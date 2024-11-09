import typia from "typia";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ArrayRecursiveUnionExplicitPointer = 
  _test_json_schemas({
    version: "3.1",
    name: "ArrayRecursiveUnionExplicitPointer", 
  })(typia.json.schemas<[ArrayRecursiveUnionExplicitPointer], "3.1">());