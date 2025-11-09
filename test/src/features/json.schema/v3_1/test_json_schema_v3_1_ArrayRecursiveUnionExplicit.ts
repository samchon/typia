import typia from "typia";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ArrayRecursiveUnionExplicit = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ArrayRecursiveUnionExplicit", 
  })(typia.json.schema<ArrayRecursiveUnionExplicit, "3.1">());