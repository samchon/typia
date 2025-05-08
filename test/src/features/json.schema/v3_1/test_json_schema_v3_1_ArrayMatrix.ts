import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";

export const test_json_schema_v3_1_ArrayMatrix = _test_json_schema({
  version: "3.1",
  name: "ArrayMatrix",
})(typia.json.schema<ArrayMatrix, "3.1">());
