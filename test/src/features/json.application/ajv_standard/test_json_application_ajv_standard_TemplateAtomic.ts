import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_json_application_ajv_standard_TemplateAtomic =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "TemplateAtomic",
  })(typia.json.application<[TemplateAtomic], "ajv", false>());
