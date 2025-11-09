import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_json_schema_v3_1_DynamicArray = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "DynamicArray",
  })(typia.json.schema<DynamicArray, "3.1">());
