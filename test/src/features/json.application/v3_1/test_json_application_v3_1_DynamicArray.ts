import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_json_application_v3_1_DynamicArray = _test_json_application({
  version: "3.1",
  name: "DynamicArray",
})(typia.json.application<[DynamicArray], "3.1">());
