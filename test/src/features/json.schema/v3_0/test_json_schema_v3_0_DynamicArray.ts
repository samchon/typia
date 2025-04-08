import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_json_schema_v3_0_DynamicArray = _test_json_schema({
  version: "3.0",
  name: "DynamicArray",
})(typia.json.schema<DynamicArray, "3.0">());
