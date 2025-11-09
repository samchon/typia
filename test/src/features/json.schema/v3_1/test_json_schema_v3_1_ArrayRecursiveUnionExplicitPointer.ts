import typia from "typia";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ArrayRecursiveUnionExplicitPointer = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ArrayRecursiveUnionExplicitPointer", 
  })(typia.json.schema<ArrayRecursiveUnionExplicitPointer, "3.1">());