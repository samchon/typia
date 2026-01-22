import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";

export const test_json_schemas_v3_0_TupleHierarchical = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "TupleHierarchical",
  })(typia.json.schemas<[TupleHierarchical], "3.0">());
