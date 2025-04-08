import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_json_schema_v3_0_ArrayRepeatedRequired = _test_json_schema({
  version: "3.0",
  name: "ArrayRepeatedRequired",
})(typia.json.schema<ArrayRepeatedRequired, "3.0">());
