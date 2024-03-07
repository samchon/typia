import typia from "typia";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_DynamicTemplate =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "DynamicTemplate",
  })(typia.json.application<[DynamicTemplate], "ajv", true>());
