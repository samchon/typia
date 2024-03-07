import typia from "typia";
import { TemplateUnion } from "../../../structures/TemplateUnion";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_TemplateUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "TemplateUnion",
  })(typia.json.application<[TemplateUnion], "ajv", false>());
