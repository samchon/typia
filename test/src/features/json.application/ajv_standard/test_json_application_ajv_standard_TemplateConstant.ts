import typia from "typia";
import { TemplateConstant } from "../../../structures/TemplateConstant";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_TemplateConstant =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "TemplateConstant",
  })(typia.json.application<[TemplateConstant], "ajv", false>());
