import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_json_schema_v3_0_ArrayHierarchical = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ArrayHierarchical",
  })(typia.json.schema<ArrayHierarchical, "3.0">());
