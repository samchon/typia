import typia from "typia";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_TupleHierarchical = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "TupleHierarchical", 
  })(typia.json.schemas<[TupleHierarchical], "3.1">());