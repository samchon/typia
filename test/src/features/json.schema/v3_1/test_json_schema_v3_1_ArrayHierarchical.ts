import typia from "typia";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ArrayHierarchical = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ArrayHierarchical", 
  })(typia.json.schema<ArrayHierarchical, "3.1">());