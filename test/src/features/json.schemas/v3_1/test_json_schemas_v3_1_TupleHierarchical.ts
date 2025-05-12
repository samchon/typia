import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";

export const test_json_schemas_v3_1_TupleHierarchical = _test_json_schemas({
  version: "3.1",
  name: "TupleHierarchical",
})(typia.json.schemas<[TupleHierarchical], "3.1">());
