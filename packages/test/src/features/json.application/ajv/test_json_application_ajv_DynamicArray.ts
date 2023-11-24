import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_json_application_ajv_DynamicArray = _test_json_application(
  "ajv",
)("DynamicArray")(typia.json.application<[DynamicArray], "ajv">());
