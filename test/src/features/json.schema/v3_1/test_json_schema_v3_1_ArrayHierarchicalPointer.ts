import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_json_schema_v3_1_ArrayHierarchicalPointer = _test_json_schema(
  {
    version: "3.1",
    name: "ArrayHierarchicalPointer",
  },
)(typia.json.schema<ArrayHierarchicalPointer, "3.1">());
