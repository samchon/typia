import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_json_schemas_v3_0_ArrayHierarchicalPointer =
  _test_json_schemas({
    version: "3.0",
    name: "ArrayHierarchicalPointer",
  })(typia.json.schemas<[ArrayHierarchicalPointer], "3.0">());
