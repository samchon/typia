import typia from "typia";
import { DynamicConstant } from "../../../structures/DynamicConstant";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_DynamicConstant =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "DynamicConstant",
  })(typia.json.application<[DynamicConstant], "ajv", false>());
