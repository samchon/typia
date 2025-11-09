import typia from "typia";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ArrayAtomicAlias = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ArrayAtomicAlias", 
  })(typia.json.schema<ArrayAtomicAlias, "3.1">());