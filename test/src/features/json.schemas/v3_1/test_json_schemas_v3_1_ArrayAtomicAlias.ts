import typia from "typia";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ArrayAtomicAlias = 
  _test_json_schemas({
    version: "3.1",
    name: "ArrayAtomicAlias", 
  })(typia.json.schemas<[ArrayAtomicAlias], "3.1">());