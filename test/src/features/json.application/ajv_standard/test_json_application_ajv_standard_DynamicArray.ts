import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_json_application_ajv_standard_DynamicArray =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "DynamicArray",
  })(typia.json.application<[DynamicArray], "ajv", false>());
