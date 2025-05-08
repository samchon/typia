import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_json_schema_v3_1_ArrayRecursive = _test_json_schema({
  version: "3.1",
  name: "ArrayRecursive",
})(typia.json.schema<ArrayRecursive, "3.1">());
