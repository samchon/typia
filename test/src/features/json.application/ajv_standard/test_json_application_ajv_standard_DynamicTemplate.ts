import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_json_application_ajv_standard_DynamicTemplate =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "DynamicTemplate",
  })(typia.json.application<[DynamicTemplate], "ajv", false>());
