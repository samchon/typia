import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_json_application_ajv_surplus_DynamicConstant =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "DynamicConstant",
  })(typia.json.application<[DynamicConstant], "ajv", true>());
