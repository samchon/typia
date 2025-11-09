import typia from "typia";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ArrayRecursiveUnionImplicit = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ArrayRecursiveUnionImplicit", 
  })(typia.json.schema<ArrayRecursiveUnionImplicit, "3.1">());