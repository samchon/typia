import typia from "typia";
import { TemplateConstant } from "../../../structures/TemplateConstant";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_swagger_standard_TemplateConstant =
  _test_json_application({
    purpose: "swagger",
    surplus: false,
    name: "TemplateConstant",
  })(typia.json.application<[TemplateConstant], "swagger", false>());
