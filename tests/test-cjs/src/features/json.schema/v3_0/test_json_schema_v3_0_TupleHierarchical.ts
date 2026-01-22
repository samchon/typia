import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";

export const test_json_schema_v3_0_TupleHierarchical = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "TupleHierarchical",
  })(typia.json.schema<TupleHierarchical, "3.0">());
