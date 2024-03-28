import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_json_application_ajv_surplus_DynamicTemplate =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "DynamicTemplate",
  })(typia.json.application<[DynamicTemplate], "ajv", true>());
