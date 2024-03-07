import typia from "typia";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_TemplateAtomic =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "TemplateAtomic",
  })(typia.json.application<[TemplateAtomic], "ajv", true>());
