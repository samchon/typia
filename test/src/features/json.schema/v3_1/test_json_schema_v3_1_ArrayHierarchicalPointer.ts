import typia from "typia";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ArrayHierarchicalPointer = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ArrayHierarchicalPointer", 
  })(typia.json.schema<ArrayHierarchicalPointer, "3.1">());