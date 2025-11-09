import typia from "typia";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_TupleHierarchical = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "TupleHierarchical", 
  })(typia.json.schema<TupleHierarchical, "3.1">());