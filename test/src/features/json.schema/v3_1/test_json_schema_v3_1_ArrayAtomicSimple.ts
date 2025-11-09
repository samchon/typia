import typia from "typia";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ArrayAtomicSimple = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ArrayAtomicSimple", 
  })(typia.json.schema<ArrayAtomicSimple, "3.1">());