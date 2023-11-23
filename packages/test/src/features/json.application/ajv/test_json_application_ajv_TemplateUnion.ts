import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_json_application_ajv_TemplateUnion = _test_json_application(
  "ajv",
)("TemplateUnion")(typia.json.application<[TemplateUnion], "ajv">());
